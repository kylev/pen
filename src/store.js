import { computed, decorate, observable } from "mobx";

const pageSizes = {
  letter: { width: 203, height: 271, margin: 10 }
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
}

decorate(PenStore, {
  pageSize: observable,
  orientation: observable,
  dimensions: computed
});

const store = new PenStore();

export default store;
