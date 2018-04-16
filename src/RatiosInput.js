import React from "react";
import { observer } from "mobx-react";

import TextField from "material-ui/TextField";

const labels = ["Asc", "XHeight", "Desc", "Spacing"];

const RatiosInput = ({ store }) => {
  return store.ratios.map((r, i) => (
    <TextField
      type="number"
      label={labels[i]}
      min={0}
      max={10}
      value={r}
      onChange={e => {
        store.ratioPreset("custom");
        store.ratios[i] = e.target.value;
      }}
      style={{ marginRight: 10 }}
      key={i}
    />
  ));
};

export default observer(RatiosInput);
