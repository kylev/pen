import { reduce, times, range } from "lodash";
import { action, computed, decorate, observable } from "mobx";
import Color from "color";

import { composeLine, defaultLineSpec } from "./lines";

console.log(Color.rgb(255, 255, 255).darken(0.5));

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

  guideline = { angle: 55, color: "pink", spacing: 40 };

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
    { key: "white", name: "None (White)" },
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
    { key: "red", name: "Red" }
  ];
  ratioChoices = [
    { key: "custom", name: "Custom" },
    { key: "2422", name: "Italic 2:4:2", value: [2, 4, 2, 2] },
    { key: "simple", name: "Basic Penmanship", value: [1, 1, 2, 0] },
    {
      key: "winterplate",
      name: "Copperplate (Winters) 3:2:3",
      value: [3, 2, 3, 0]
    },
    {
      key: "foundation",
      name: "Foundation 2:2:2",
      value: [2, 2, 2, 0]
    },
    {
      key: "german",
      name: "German Kurrent 2:1:2",
      value: [2, 1, 2, 0]
    }
  ];

  get gap() {
    return this.xHeight * (this.ratios[3] / this.ratios[1]);
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

  get lineSet() {
    const {
      margin,
      dimensions: { width },
      ratios,
      xHeight,
      ascender,
      midline,
      baseline,
      descender
    } = this;

    const midlineOffset = xHeight * (ratios[0] / ratios[1]),
      baselineOffset = midlineOffset + xHeight,
      descenderOffset = baselineOffset + xHeight * (ratios[2] / ratios[1]);

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
    return reduce(
      this.ratios,
      (sum, r) => sum + r / this.ratios[1] * this.xHeight,
      0
    );
  }

  get guideLineSet() {
    const {
      dimensions: { width },
      guideline: { angle, color, spacing }
    } = this;
    const ratio = Math.tan(angle * RAD_RATIO);
    const count = width / spacing * 2; // Not exact...

    return times(count, i => ({
      key: `guideline-${i}`,
      x1: 0,
      y1: ratio * i * spacing,
      x2: i * spacing,
      y2: 0,
      stroke: color,
      strokeWidth: 0.1
    }));
  }

  get watermark() {
    return `https://kylev.github.io/pen/ Ratios(${this.ratios}) Unit(${
      this.xHeight
    }mm)`;
  }

  ratioPreset(key) {
    this.ratio = key;
    this.ratios =
      this.ratioChoices.find(c => key === c.key).value || this.ratios;
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
  lineSet: computed,
  lineSetHeight: computed,
  guideLineSet: computed,

  ratioPreset: action.bound
});

const store = new PenStore();

export default store;
