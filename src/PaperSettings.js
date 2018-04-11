import React from "react";
import { observer } from "mobx-react";

import DropDown from "./DropDown";
import NumberInput from "./NumberInput";

const PaperSettings = ({ store }) => {
  return (
    <form>
      <DropDown
        onChange={v => (store.pageSize = v)}
        value={store.pageSize}
        choices={store.pageSizes}
      />
      <DropDown
        onChange={v => (store.orientation = v)}
        value={store.orientation}
        choices={store.orientations}
      />
      <NumberInput
        min={0}
        max={20}
        value={store.margin}
        onChange={v => (store.margin = v)}
      />
    </form>
  );
};

export default observer(PaperSettings);
