import React from "react";
import { translate } from "react-i18next";
import { clamp } from "lodash";
import { observer } from "mobx-react";

import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

const labels = ["ascender", "x", "descender", "gap"];

let RatioInput = ({ store, t }) => (
  <span>
    {store.ratios.map((r, i) => (
      <span key={i} style={{ display: "inline-block", marginRight: 8 }}>
        <Input
          type="number"
          value={r}
          onChange={e => {
            store.ratioPreset("custom");
            store.ratios[i] = clamp(e.target.value, 0, 10);
          }}
          style={{ marginTop: 16, width: 60 }}
        />
        <br />
        <FormHelperText>{t(labels[i])}</FormHelperText>
      </span>
    ))}
  </span>
);
RatioInput = observer(RatioInput);

const RatiosInput = ({ store, t }) => {
  return (
    <FormControl>
      <InputLabel shrink>{t("ratios")}</InputLabel>
      <RatioInput store={store} t={t} />
    </FormControl>
  );
};

export default translate()(RatiosInput);
