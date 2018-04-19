import React from "react";
import { observer } from "mobx-react";

import Grid from "material-ui/Grid";

import DropDownField from "./DropDownField";
import MillimeterField from "./MillimeterField";

const PaperSettings = ({ store }) => {
  return (
    <Grid container spacing={24}>
      <Grid item xs={6} md={3}>
        <DropDownField
          label="Presets"
          onChange={v => store.ratioPreset(v)}
          value={store.ratio}
          choices={store.ratioChoices}
        />
      </Grid>
      <Grid item sm={6} md={3}>
        <MillimeterField
          label="X Height"
          min={0.1}
          step={0.1}
          value={store.xHeight}
          onChange={v => (store.xHeight = v)}
        />
      </Grid>
      <Grid item sm={6} md={3}>
        <DropDownField
          label="Size"
          onChange={v => (store.pageSize = v)}
          value={store.pageSize}
          choices={store.pageSizes}
        />
      </Grid>
      <Grid item sm={6} md={3}>
        <DropDownField
          label="Orentation"
          onChange={v => (store.orientation = v)}
          value={store.orientation}
          choices={store.orientations}
        />
      </Grid>
    </Grid>
  );
};

export default observer(PaperSettings);
