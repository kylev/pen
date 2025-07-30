import { reduce, range } from "lodash";
import { action, computed, observable, makeObservable } from "mobx";

import { composeLine, defaultLineSpec } from "./lines";

const RAD_RATIO = Math.PI / 180;

// Reminder: entirely written in metric since SVG supports it and it
// simplifies printing.
class PenStore {
  pageSize = "letter";
  orientation = "portrait";
  printGap = 28;
  ratio = "simple";
  ratios = [1, 1, 1, 1];
  xHeight = 8.0;
  xColor = "transparent";
  gapColor = "transparent";
  watermarkColor = "darkgray";

  ascender = defaultLineSpec({ name: "Ascender" });
  midline = defaultLineSpec({ name: "Midline", color: "red", dash: "1, 1" });
  baseline = defaultLineSpec({ name: "Baseline" });
  descender = defaultLineSpec({ name: "Descender", color: "lightgray" });
  halfLine = defaultLineSpec({
    name: "Half-Lines",
    color: "transparent",
    dash: "2, 2"
  });
  guideline = defaultLineSpec({
    name: "Guide Lines",
    strokeWidth: 0.1,
    color: "pink",
    angle: 90,
    spacing: 30
  });

  // Read-only
  isDev = import.meta.env.DEV;
  pageSizes = [
    { key: "a3", width: 297, height: 420 },
    { key: "a4", width: 210, height: 297 },
    { key: "a5", width: 148, height: 210 },
    { key: "ledger", width: 279, height: 432 },
    { key: "legal", width: 216, height: 356 },
    { key: "letter", width: 216, height: 279 }
  ];
  orientations = [{ key: "landscape" }, { key: "portrait" }];
  ratioChoices = [
    { key: "custom" },
    { key: "simple", ratios: [1, 1, 1, 1], angle: 0 },
    {
      key: "italic",
      ratios: [2, 4, 2, 1],
      angle: 83
    },
    {
      key: "copperplate",
      ratios: [3, 2, 3, 1],
      angle: 55
    },
    {
      key: "spencerian",
      ratios: [2, 1, 2, 1],
      angle: 52
    },
    {
      key: "foundation",
      ratios: [2, 2, 2, 1],
      angle: 90
    },
    {
      key: "german",
      ratios: [2, 1, 2, 1],
      angle: 65
    }
  ];

  constructor() {
    makeObservable(this, {
      pageSize: observable,
      orientation: observable,
      printGap: observable,
      ratio: observable,
      ratios: observable,
      xHeight: observable,
      xColor: observable,
      gapColor: observable,
      watermarkColor: observable,

      ascender: observable,
      midline: observable,
      baseline: observable,
      descender: observable,
      guideline: observable,
      halfLine: observable,

      gap: computed,
      gapRect: computed,
      dimensions: computed,
      heights: computed,
      lineSet: computed,
      lineSetHeight: computed,
      guideLineSet: computed,
      halfLineSet: computed,

      ratioPreset: action,
      setGuidelineAngle: action,
      setRatio: action,
    });
  }

  get gap() {
    return this.heights[3];
  }

  get gapRect() {
    return {
      x: 0,
      y: 0,
      width: this.dimensions.width,
      height: this.gap,
      fill: this.gapColor
    };
  }

  get dimensions() {
    const dims = this.pageSizes.find(s => s.key === this.pageSize);

    if (this.orientation === "landscape")
      return {
        ...dims,
        width: dims.height - this.printGap,
        height: dims.width - this.printGap
      };
    else
      return {
        ...dims,
        width: dims.width - this.printGap,
        height: dims.height - this.printGap
      };
  }

  get heights() {
    return this.ratios.map(r => (r / this.ratios[1]) * this.xHeight);
  }

  get lineSet() {
    const {
      dimensions: { width },
      heights,
      ascender,
      midline,
      baseline,
      descender
    } = this;

    const midlineOffset = heights[0],
      baselineOffset = midlineOffset + heights[1],
      descenderOffset = baselineOffset + heights[2];

    return [
      {
        key: "Ascender",
        ...composeLine({
          ...ascender,
          width
        })
      },
      {
        key: "Midline",
        ...composeLine({
          ...midline,
          offset: midlineOffset,
          width
        })
      },
      {
        key: "Baseline",
        ...composeLine({
          ...baseline,
          offset: baselineOffset,
          width
        })
      },
      {
        key: "Descender",
        ...composeLine({
          ...descender,
          offset: descenderOffset,
          width
        })
      }
    ];
  }

  get lineSetHeight() {
    return reduce(this.heights, (sum, h) => sum + h, 0);
  }

  get guideLineSet() {
    const {
      dimensions: { height, width },
      guideline: { angle, spacing }
    } = this;

    if (angle < 1 || angle > 89) return [];

    const slopeRatio = Math.tan(angle * RAD_RATIO);
    const yOffset = width * slopeRatio;
    const yStep = spacing * slopeRatio;
    const count = Math.floor(height / yStep);
    const baseCount = Math.floor(width / spacing);
    const baseOffset = (count * yStep - height) / slopeRatio;

    return [
      ...range(1, count + 1).map(i => ({
        key: `guideline-${i}`,
        ...composeLine({ ...this.guideline }),
        x1: 0,
        y1: i * yStep,
        x2: width,
        y2: i * yStep - yOffset
      })),
      ...range(1, baseCount + 1).map(i => ({
        key: `guidelinebase-${i}`,
        ...composeLine({ ...this.guideline }),
        x1: i * spacing + baseOffset,
        y1: height,
        x2: width,
        y2: height - slopeRatio * (width - baseOffset - i * spacing)
      }))
    ];
  }

  get halfLineSet() {
    const {
      dimensions: { width },
      heights
    } = this;

    return [
      {
        key: "top-half-line",
        ...composeLine({ ...this.halfLine, width, offset: heights[0] / 2 })
      },
      {
        key: "bottom-half-line",
        ...composeLine({
          ...this.halfLine,
          width,
          offset: heights[0] + heights[1] + heights[2] / 2
        })
      }
    ];
  }

  get watermark() {
    return `https://kylev.github.io/pen/ Ratios(${this.ratios}) XHeight(${
      this.xHeight
    }mm) Angle(${this.guideline.angle}°)`;
  }

  ratioPreset(key) {
    const preset = this.ratioChoices.find(c => key === c.key);

    this.ratio = key;
    if (preset.ratios) this.ratios = preset.ratios;
    if (preset.angle !== undefined) this.guideline.angle = preset.angle;
  }

  setGuidelineAngle(angle) {
    this.guideline.angle = Math.min(Math.max(angle, 15), 90);
    if (this.ratio !== "custom") this.ratioPreset("custom");
  }

  setRatio(index, value) {
    this.ratios[index] = Math.min(Math.max(value, 0), 20);;
    if (this.ratio !== "custom") this.ratioPreset("custom");
  }
}

const store = new PenStore();

export default store;
