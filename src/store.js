import { reduce, times, range } from "lodash";
import { action, computed, decorate, observable } from "mobx";
import Color from "color";

import { composeLine, defaultLineSpec } from "./lines";

const RAD_RATIO = Math.PI / 180;

class PenStore {
  pageSize = "letter";
  orientation = "portrait";
  margin = 0;
  ratio = "simple";
  ratios = [1, 1, 2, 0];
  xHeight = 6;
  gapColor = "white";
  watermarkColor = "darkgray";
  ascender = defaultLineSpec({ name: "Ascender" });
  midline = defaultLineSpec({ name: "Midline", color: "red", dash: "even1cm" });
  baseline = defaultLineSpec({ name: "Baseline" });
  descender = defaultLineSpec({ name: "Descender", color: "lightgray" });

  guideline = { angle: 0, color: "pink", spacing: 40 };

  // Read-only
  pageSizes = [
    { key: "a4", name: "A4", width: 200, height: 287 },
    { key: "letter", name: "Letter", width: 201, height: 266 }
  ];
  orientations = [
    { key: "landscape", name: "Landcape" },
    { key: "portrait", name: "Portrait" }
  ];
  colors = [
    { key: "transparent", name: "None (transparent)" },
    {
      key: "black",
      name: "Black"
    },
    { key: "cyan", name: "Cyan" },
    { key: "darkgray", name: "Dark Gray" },
    { key: "green", name: "Green" },
    { key: "gray", name: "Gray" },
    ...range(1, 10).map(v => ({
      key: Color.rgb(255, 255, 255)
        .darken(v / 10.0)
        .string(),
      name: `Gray ${v * 10}%`
    })),
    { key: "lightgray", name: "Light Gray" },
    { key: "pink", name: "Pink" },
    { key: "red", name: "Red" },
    { key: "white", name: "White" }
  ];
  ratioChoices = [
    { key: "custom", name: "Custom" },
    { key: "italic", name: "Italic 2:4:2", ratios: [2, 4, 2, 2], angle: 83 },
    { key: "simple", name: "Basic Penmanship", ratios: [1, 1, 2, 0], angle: 0 },
    {
      key: "winterplate",
      name: "Copperplate (Winters) 3:2:3 55º",
      ratios: [3, 2, 3, 0],
      angle: 55
    },
    {
      key: "foundation",
      name: "Foundation 2:2:2",
      ratios: [2, 2, 2, 0]
    },
    {
      key: "german",
      name: "German Kurrent 2:1:2",
      ratios: [2, 1, 2, 0]
    }
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
      return { ...dims, width: dims.height, height: dims.width };
    else return dims;
  }

  get heights() {
    return this.ratios.map(r => r / this.ratios[1] * this.xHeight);
  }

  get lineSet() {
    const {
      margin,
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
          width,
          margin
        })
      },
      {
        key: "Midline",
        ...composeLine({
          ...midline,
          offset: midlineOffset,
          width,
          margin
        })
      },
      {
        key: "Baseline",
        ...composeLine({
          ...baseline,
          offset: baselineOffset,
          width,
          margin
        })
      },
      {
        key: "Descender",
        ...composeLine({
          ...descender,
          offset: descenderOffset,
          width,
          margin
        })
      }
    ];
  }

  get lineSetHeight() {
    return reduce(this.heights, (sum, h) => sum + h, 0);
  }

  get guideLineSet() {
    const {
      dimensions: { width },
      guideline: { angle, color, spacing }
    } = this;

    if (angle < 1) return [];

    const slopeRatio = Math.tan(angle * RAD_RATIO);
    const count = width / spacing * 2; // Not exact...

    return times(count, i => ({
      key: `guideline-${i}`,
      x1: 0,
      y1: slopeRatio * i * spacing,
      x2: i * spacing,
      y2: 0,
      stroke: color,
      strokeWidth: 0.1
    }));
  }

  get watermark() {
    return `https://kylev.github.io/pen/ Ratios(${this.ratios}) XHeight(${
      this.xHeight
    }mm)`;
  }

  ratioPreset(key) {
    const preset = this.ratioChoices.find(c => key === c.key);

    this.ratio = key;
    this.ratios = preset.ratios || this.ratios;
    this.guideline.angle = preset.angle || this.guideline.angle;
  }
}

decorate(PenStore, {
  pageSize: observable,
  orientation: observable,
  margin: observable,
  ratio: observable,
  ratios: observable,
  xHeight: observable,
  gapColor: observable,
  watermarkColor: observable,

  ascender: observable,
  midline: observable,
  baseline: observable,
  descender: observable,
  guideline: observable,

  gap: computed,
  gapRect: computed,
  dimensions: computed,
  heights: computed,
  lineSet: computed,
  lineSetHeight: computed,
  guideLineSet: computed,

  ratioPreset: action.bound
});

const store = new PenStore();

export default store;
