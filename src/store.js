import { computed, decorate, observable } from "mobx";

const pageSizes = {
  letter: { width: 203, height: 271, margin: 10 }
};

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

  get dimensions() {
    const dims = pageSizes[this.pageSize];

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
  dimensions: computed,
  lineSet: computed
});

const store = new PenStore();

export default store;
