import { computed, decorate, observable } from "mobx";

const offsetLine = (x, y, width) => {
  return {
    x1: x,
    y1: y,
    x2: width,
    y2: y,
    stroke: "black",
    strokeWidth: 0.2
  };
};

class PenStore {
  pageSize = "letter";
  orientation = "landscape";
  margin = 15;
  gap = 10;

  // Read-only
  pageSizes = [
    { key: "a4", name: "A4", width: 200, height: 287 },
    { key: "letter", name: "Letter", width: 203, height: 271 }
  ];

  get dimensions() {
    const dims = this.pageSizes.find(s => s.key === this.pageSize);

    if (this.orientation === "landscape")
      return { ...dims, width: dims.height, height: dims.width };
    else return dims;
  }

  get lineSet() {
    const { margin, dimensions } = this;
    const lineWidth = dimensions.width - margin * 2;

    return [
      {
        key: "headline",
        ...offsetLine(margin, 0, lineWidth)
      },
      {
        key: "midline",
        ...offsetLine(margin, 7.5, lineWidth),
        strokeDasharray: [1, 1]
      },
      {
        key: "baseline",
        ...offsetLine(margin, 15, lineWidth)
      }
    ];
  }
}

decorate(PenStore, {
  pageSize: observable,
  orientation: observable,
  margin: observable,
  gap: observable,

  dimensions: computed,
  lineSet: computed
});

const store = new PenStore();

export default store;
