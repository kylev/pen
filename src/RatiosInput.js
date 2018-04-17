import React from "react";
import { clamp } from "lodash";
import { observer } from "mobx-react";

import TextField from "material-ui/TextField";

const labels = ["Ascender", "X", "Descender", "Gap"];

const RatiosInput = ({ store }) => {
  return store.ratios.map((r, i) => (
    <TextField
      type="number"
      label={labels[i]}
      value={r}
      onChange={e => {
        store.ratioPreset("custom");
        store.ratios[i] = clamp(e.target.value, 0, 10);
      }}
      style={{ marginRight: 10, width: 100 }}
      key={i}
    />
  ));
};

export default observer(RatiosInput);
