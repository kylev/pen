import React from "react";

import { clamp } from "lodash";
import { observer } from "mobx-react";
import { withTranslation } from "react-i18next";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

const labels = ["ascender", "xheight", "descender", "gap"];

function PlainRatioInput({ store, t }) {
  return (
    <span>
      {store.ratios.map((r, i) => (
        <span key={i} style={{ display: "inline-block", marginRight: 8 }}>
          <Input
            type="number"
            value={r}
            disabled={store.ratio !== "custom"}
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
};
const RatioInput = observer(PlainRatioInput);

function PlainRatiosInput({ store, t }) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'nowrap' }}>
      <FormControl>
        <InputLabel shrink>{t("ratios")}</InputLabel>
      </FormControl>
      <RatioInput store={store} t={t} />
    </Box>
  );
};

const RatiosInput = withTranslation()(PlainRatiosInput);
export default RatiosInput;
