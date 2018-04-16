import React from "react";
import { observer } from "mobx-react";

import Grid from "material-ui/Grid";
import TextField from "material-ui/TextField";

import ColFormItem from "./ColFormItem";
import DropDown from "./DropDown";
import RatiosInput from "./RatiosInput";
import MillimeterField from "./MillimeterFeed";

const PaperSettings = ({ store }) => {
  return (
    <Grid container spacing={8}>
      <ColFormItem xs={3} label="Presets">
        <DropDown
          onChange={e => store.ratioPreset(e.target.value)}
          value={store.ratio}
          choices={store.ratioChoices}
        />
      </ColFormItem>

      <Grid item xs={9}>
        <RatiosInput store={store} />
      </Grid>

      <ColFormItem xs={3} label="X">
        <DropDown
          onChange={e => (store.xColor = e.target.value)}
          value={store.xColor}
          choices={store.colors}
        />
      </ColFormItem>

      <Grid item xs={3}>
        <MillimeterField
          label="X Height"
          value={store.xHeight}
          onChange={v => (store.xHeight = v)}
        />
      </Grid>
      <ColFormItem xs={3} label="Size">
        <DropDown
          onChange={e => (store.pageSize = e.target.value)}
          value={store.pageSize}
          choices={store.pageSizes}
        />
      </ColFormItem>
      <ColFormItem xs={3} label="Orentation">
        <DropDown
          onChange={e => (store.orientation = e.target.value)}
          value={store.orientation}
          choices={store.orientations}
        />
      </ColFormItem>
      <ColFormItem xs={3} label="Gap Color">
        <DropDown
          onChange={e => (store.gapColor = e.target.value)}
          value={store.gapColor}
          choices={store.colors}
        />
      </ColFormItem>
      <ColFormItem xs={3} label="Watermark">
        <DropDown
          onChange={e => (store.watermarkColor = e.target.value)}
          value={store.watermarkColor}
          choices={store.colors}
        />
      </ColFormItem>
      <Grid item xs={3}>
        <TextField
          label="Angle"
          type="number"
          min={0}
          max={90}
          value={store.guideline.angle}
          onChange={e => {
            store.ratioPreset("custom");
            store.guideline.angle = e.target.value;
          }}
        />
      </Grid>
    </Grid>
  );
};

export default observer(PaperSettings);
