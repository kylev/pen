import React from "react";
import { observer } from "mobx-react";

import DropDown from "./DropDown";

const PaperSettings = ({ store }) => {
  return (
    <form>
      <DropDown
        onChange={e => (store.pageSize = e.target.value)}
        value={store.pageSize}
        choices={store.pageSizes}
      />
      <DropDown
        onChange={e => (store.orientation = e.target.value)}
        value={store.orientation}
        choices={store.orientations}
      />

      <input
        type="number"
        value={store.margin}
        onChange={e => (store.margin = e.target.value)}
      />
    </form>
  );
};

export default observer(PaperSettings);
