import React from "react";

import { Box, Grid } from "@mui/material";
import { observer } from "mobx-react";

import DropDownField from "./DropDownField";
import MillimeterField from "./MillimeterField";

const BasicSettings = ({ hidden, store }) => {
  const gridSize = { xs: 12, sm: 6, md: 3 };
  return (
    <Box hidden={hidden}>
      <Grid container spacing={2}>
        <Grid size={gridSize}>
          <DropDownField
            id="presets-field"
            label={"presets"}
            value={store.ratio}
            onChange={v => store.ratioPreset(v)}
            choices={store.ratioChoices}
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

const MobxBasicSettings = observer(BasicSettings);
export default MobxBasicSettings;
