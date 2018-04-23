import React from "react";
import { observer } from "mobx-react";

import Grid from "material-ui/Grid";

import DropDownField from "./DropDownField";
import MillimeterField from "./MillimeterField";

const PaperSettings = ({ store }) => {
  return (
    <Grid container spacing={24}>
      <Grid item xs={6} md={4}>
        <DropDownField
          id="presets-field"
          label="Presets"
          value={store.ratio}
          onChange={v => store.ratioPreset(v)}
          choices={store.ratioChoices}
        />
      </Grid>
      <Grid item sm={6} md={2}>
        <MillimeterField
          id="x-height-field"
          label="X Height"
          min={0.1}
          step={0.1}
          value={store.xHeight}
          onChange={v => (store.xHeight = v)}
        />
      </Grid>
      <Grid item sm={6} md={3}>
        <DropDownField
          id="size-field"
          label="Size"
          value={store.pageSize}
          onChange={v => (store.pageSize = v)}
          choices={store.pageSizes}
        />
      </Grid>
      <Grid item sm={6} md={3}>
        <DropDownField
          id="orientation-field"
          label="Orientation"
          value={store.orientation}
          onChange={v => (store.orientation = v)}
          choices={store.orientations}
        />
      </Grid>
    </Grid>
  );
};

export default observer(PaperSettings);
