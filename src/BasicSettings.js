import React from "react";
import { observer } from "mobx-react";

import Grid from "material-ui/Grid";

import ColFormItem from "./ColFormItem";
import DropDown from "./DropDown";
import MillimeterField from "./MillimeterField";

const PaperSettings = ({ store }) => {
  return (
    <Grid container spacing={24}>
      <ColFormItem xs={6} md={3} label="Presets">
        <DropDown
          onChange={e => store.ratioPreset(e.target.value)}
          value={store.ratio}
          choices={store.ratioChoices}
        />
      </ColFormItem>
      <Grid item sm={6} md={3}>
        <MillimeterField
          label="X Height"
          min={0.1}
          step={0.1}
          value={store.xHeight}
          onChange={v => (store.xHeight = v)}
        />
      </Grid>
      <ColFormItem sm={6} md={3} label="Size">
        <DropDown
          onChange={e => (store.pageSize = e.target.value)}
          value={store.pageSize}
          choices={store.pageSizes}
        />
      </ColFormItem>
      <ColFormItem sm={6} md={3} label="Orentation">
        <DropDown
          onChange={e => (store.orientation = e.target.value)}
          value={store.orientation}
          choices={store.orientations}
        />
      </ColFormItem>
    </Grid>
  );
};

export default observer(PaperSettings);
