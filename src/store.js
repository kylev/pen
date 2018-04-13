import { computed, decorate, observable } from "mobx";

import { composeLine, defaultLineSpec } from "./lines";

class PenStore {
  pageSize = "letter";
  orientation = "landscape";
  margin = 0;
  gap = 10;
  headline = defaultLineSpec();
  midline = defaultLineSpec({ offset: 7.5, color: "red", dash: "even1cm" });
  baseline = defaultLineSpec({ offset: 15 });
  guideline = { angle: 55, color: "pink", spacing: 40 };

  // Read-only
  pageSizes = [
    { key: "a4", name: "A4", width: 200, height: 287 },
    { key: "letter", name: "Letter", width: 203, height: 271 }
  ];
  orientations = [
    { key: "landscape", name: "Landcape" },
    { key: "portrait", name: "Portrait" }
  ];

  get dimensions() {
    const dims = this.pageSizes.find(s => s.key === this.pageSize);

    if (this.orientation === "landscape")
      return { ...dims, width: dims.height, height: dims.width };
    else return dims;
  }

  get lineSet() {
    const { margin, dimensions: { width }, headline, midline, baseline } = this;

    return [
      {
        key: "headline",
        ...composeLine({
          ...headline,
          width,
          margin
        })
      },
      {
        key: "midline",
        ...composeLine({
          ...midline,
          width,
          margin
        })
      },
      {
        key: "baseline",
        ...composeLine({
          ...baseline,
          width,
          margin,
          offset: 15
        })
      }
    ];
  }
}

decorate(PenStore, {
  pageSize: observable,
  orientation: observable,
  margin: observable,
  gap: observable,

  headline: observable,
  midline: observable,
  baseline: observable,
  guideline: observable,

  dimensions: computed,
  lineSet: computed
});

const store = new PenStore();

export default store;
