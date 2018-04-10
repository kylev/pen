import { computed, decorate, observable } from "mobx";

class PenStore {
  pageSize = "letter";
  fill = "green";

  get dimensions() {
    return { width: 100, height: 100 };
  }
}

decorate(PenStore, {
  pageSize: observable,
  fill: observable,
  dimensions: computed
});

const store = new PenStore();

export default store;
