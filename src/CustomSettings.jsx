import React from "react";

import { Box, Grid } from "@mui/material";
import { observer } from "mobx-react-lite";

import ColorDropDownField from "./ColorDropDownField";
import MillimeterField from "./MillimeterField";

const CustomSettings = ({ hidden, store }) => {
  return (
    <Box hidden={hidden}>
      <Grid container spacing={4}>
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

const MobxCustomSettings = observer(CustomSettings);
export default MobxCustomSettings;
