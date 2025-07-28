import React from "react";

import { Box, Grid, InputAdornment, TextField } from "@mui/material";
import { withTranslation } from "react-i18next";
import { clamp } from "lodash";
import { observer } from "mobx-react";

import ColorDropDownField from "./ColorDropDownField";
import RatiosInput from "./RatiosInput";
import MillimeterField from "./MillimeterField";

const CustomSettings = ({ hidden, store, t }) => {
  return (
    <Box hidden={hidden}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 4 }}>
          <RatiosInput store={store} />
        </Grid>
        <Grid size={{ sm: 6, md: 4 }}>
          <TextField
            id="guide-angle-field"
            label={t("guideangle")}
            type="number"
            value={store.guideline.angle}
            onChange={e => {
              store.ratioPreset("custom");
              store.guideline.angle = clamp(e.target.value, 0, 90);
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">°</InputAdornment>
            }}
          />
        </Grid>
        <Grid size={{ xs: 6, sm: 4 }}>
          <MillimeterField
            id="guide-spacing-field"
            label="guidespacing"
            value={store.guideline.spacing}
            onChange={v => (store.guideline.spacing = v)}
          />
        </Grid>

        <Grid size={{ xs: 6, sm: 3 }}>
          <ColorDropDownField
            id="gap-color-field"
            label="gapcolor"
            onChange={v => (store.gapColor = v)}
            value={store.gapColor}
          />
        </Grid>
        <Grid size={{ xs: 6, sm: 3 }}>
          <ColorDropDownField
            id="x-marker-field"
            label="xmarker"
            onChange={v => (store.xColor = v)}
            value={store.xColor}
          />
        </Grid>
        <Grid size={{ xs: 6, sm: 3 }}>
          <ColorDropDownField
            id="watermark-color-field"
            label="watermark"
            onChange={v => (store.watermarkColor = v)}
            value={store.watermarkColor}
          />
        </Grid>
        <Grid size={{ xs: 6, sm: 3 }}>
          <MillimeterField
            id="print-gap-field"
            label="globalmargin"
            onChange={v => (store.printGap = v)}
            value={store.printGap}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

const MobxCustomSettings = withTranslation()(observer(CustomSettings));
export default MobxCustomSettings;
