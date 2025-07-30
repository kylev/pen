import React from "react";

import { Box, Grid, InputAdornment, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

import DropDownField from "./DropDownField";
import MillimeterField from "./MillimeterField";
import RatiosInput from "./RatiosInput";

function BasicSettings({ hidden, store }) {
  const gridSize = { xs: 12, sm: 4 };
  const { t } = useTranslation();

  return (
    <Box hidden={hidden}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 5, md: 5 }}>
          <DropDownField
            id="presets-field"
            label={"presets"}
            value={store.ratio}
            onChange={v => store.setRatioPreset(v)}
            choices={store.ratioChoices}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 5, md: 5 }}>
          <RatiosInput store={store} />
        </Grid>
        <Grid size={{ xs: 12, sm: 2, md: 2 }}>
          <TextField
            id="guide-angle-field"
            label={t("guideangle")}
            type="number"
            value={store.guideline.angle}
            disabled={store.ratio !== "custom"}
            onChange={e => store.setGuidelineAngle(e.target.value)}
            slotProps={{
              input: {
                endAdornment: <InputAdornment position="end">°</InputAdornment>
              }
            }}
          />
        </Grid>

        <Grid size={gridSize}>
          <MillimeterField
            id="x-height-field"
            label={"xheight"}
            min={0.1}
            step={0.1}
            value={store.xHeight}
            onChange={v => (store.xHeight = v)}
          />
        </Grid>
        <Grid size={gridSize}>
          <DropDownField
            id="size-field"
            label={"pagesize"}
            value={store.pageSize}
            onChange={v => (store.pageSize = v)}
            choices={store.pageSizes}
          />
        </Grid>
        <Grid size={gridSize}>
          <DropDownField
            id="orientation-field"
            label={"pageorientation"}
            value={store.orientation}
            onChange={v => (store.orientation = v)}
            choices={store.orientations}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BasicSettings;
