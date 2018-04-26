import { reduce, range } from "lodash";
import { action, computed, decorate, observable } from "mobx";
import Color from "color";

import { composeLine, defaultLineSpec } from "./lines";

const RAD_RATIO = Math.PI / 180;

class PenStore {
  pageSize = "letter";
  orientation = "portrait";
  printGap = 22;
  ratio = "simple";
  ratios = [1, 1, 1, 1];
  xHeight = 8.2;
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
    angle: 0,
    spacing: 30
  });

  // Read-only
  isDev = process.env.NODE_ENV === "development";
  pageSizes = [
    { key: "a3", name: "A3", width: 297, height: 420 },
    { key: "a4", name: "A4", width: 210, height: 297 },
    { key: "ledger", name: "US Ledger (11x17)", width: 279, height: 432 },
    { key: "legal", name: "US Legal", width: 216, height: 356 },
    { key: "letter", name: "US Letter", width: 216, height: 279 }
  ];
  orientations = [
    { key: "landscape", name: "Landcape" },
    { key: "portrait", name: "Portrait" }
  ];
  colors = [
    { key: "transparent", name: "None" },
    {
      key: "black",
      name: "Black"
    },
    { key: "gray", name: "Gray" },
    ...range(1, 10).map(v => ({
      key: Color.rgb(255, 255, 255)
        .darken(v / 10.0)
        .string(),
      name: `Gray ${v * 10}%`
    })),
    { key: "blue", name: "Blue" },
    { key: "cyan", name: "Cyan" },
    { key: "darkgray", name: "Dark Gray" },
    { key: "green", name: "Green" },
    { key: "lightgray", name: "Light Gray" },
    { key: Color.rgb(164, 221, 237).string(), name: "Non-Photo Blue" },
    { key: "pink", name: "Pink" },
    { key: "red", name: "Red" },
    { key: "white", name: "White" },
    { key: "yellow", name: "Yellow" }
  ];
  ratioChoices = [
    { key: "custom", name: "Custom" },
    { key: "simple", name: "Basic Penmanship", ratios: [1, 1, 1, 1], angle: 0 },
    {
      key: "italic",
      name: "Italic 2:4:2 83°",
      ratios: [2, 4, 2, 2],
      angle: 83
    },
    {
      key: "winterplate",
      name: "Copperplate (Winters) 3:2:3 55°",
      ratios: [3, 2, 3, 0],
      angle: 55
    },
    {
      key: "spencerian",
      name: "Spencerian 2:1:2 52°",
      ratios: [2, 1, 2, 1],
      angle: 52
    },
    {
      key: "foundation",
      name: "Foundation 2:2:2",
      ratios: [2, 2, 2, 0],
      angle: 0
    },
    {
      key: "german",
      name: "German Kurrent 2:1:2",
      ratios: [2, 1, 2, 0],
      angle: 0
    }
  ];
  dashChoices = [
    { key: "none", name: "Solid" },
    { key: "1, 1", name: "1cm" },
    { key: "2, 2", name: "2cm" },
    { key: "4, 2", name: "4:2cm" }
  ];

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
    return this.ratios.map(r => r / this.ratios[1] * this.xHeight);
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

    if (angle < 1) return [];

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
    const { dimensions: { width }, heights } = this;

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
    this.ratios = preset.ratios || this.ratios;
    this.guideline.angle =
      preset.angle === undefined ? this.guideline.angle : preset.angle;
  }
}

decorate(PenStore, {
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

  ratioPreset: action.bound
});

const store = new PenStore();

export default store;
