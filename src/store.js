import { computed, decorate, observable } from "mobx";

const offsetLine = (width, offset) => {
  return {
    x1: 0,
    y1: offset,
    x2: width,
    y2: offset,
    stroke: "black",
    strokeWidth: 0.2
  };
};

class PenStore {
  pageSize = "letter";
  orientation = "landscape";
  gap = 10;

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
    const dims = this.dimensions;
    return [
      {
        key: "headline",
        ...offsetLine(dims.width, 0)
      },
      {
        key: "midline",
        ...offsetLine(dims.width, 7.5),
        strokeDasharray: [1, 1]
      },
      {
        key: "baseline",
        ...offsetLine(dims.width, 15)
      }
    ];
  }
}

decorate(PenStore, {
  pageSize: observable,
  orientation: observable,
  gap: observable,

  dimensions: computed,
  lineSet: computed
});

const store = new PenStore();

export default store;
