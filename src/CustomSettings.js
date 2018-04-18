import React from "react";
import { clamp } from "lodash";
import { observer } from "mobx-react";

import { InputAdornment } from "material-ui/Input";
import Grid from "material-ui/Grid";
import TextField from "material-ui/TextField";

import ColFormItem from "./ColFormItem";
import DropDown from "./DropDown";
import RatiosInput from "./RatiosInput";
import MillimeterField from "./MillimeterField";

const CustomSettings = ({ store }) => {
  return (
    <Grid container spacing={24}>
      <Grid item xs={12} md={4}>
        <RatiosInput store={store} />
      </Grid>
      <Grid item sm={6} md={4}>
        <TextField
          label="Guide Angle"
          type="number"
          min={0}
          max={90}
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
      <Grid item sm={6} md={4}>
        <MillimeterField
          label="Guide Spacing"
          value={store.guideline.spacing}
          onChange={v => (store.guideline.spacing = v)}
        />
      </Grid>

      <ColFormItem sm={6} md={4} label="Gap&nbsp;Color">
        <DropDown
          onChange={e => (store.gapColor = e.target.value)}
          value={store.gapColor}
          choices={store.colors}
        />
      </ColFormItem>
      <ColFormItem sm={6} md={4} label="X Marker">
        <DropDown
          onChange={e => (store.xColor = e.target.value)}
          value={store.xColor}
          choices={store.colors}
        />
      </ColFormItem>
      <ColFormItem sm={12} md={4} label="Watermark">
        <DropDown
          onChange={e => (store.watermarkColor = e.target.value)}
          value={store.watermarkColor}
          choices={store.colors}
        />
      </ColFormItem>
    </Grid>
  );
};

export default observer(CustomSettings);
