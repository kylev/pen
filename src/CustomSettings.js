import React from "react";
import { clamp } from "lodash";
import { observer } from "mobx-react";

import { InputAdornment } from "material-ui/Input";
import Grid from "material-ui/Grid";
import TextField from "material-ui/TextField";

import DropDownField from "./DropDownField";
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

      <Grid item sm={6} md={3}>
        <DropDownField
          label="Gap&nbsp;Color"
          onChange={v => (store.gapColor = v)}
          value={store.gapColor}
          choices={store.colors}
        />
      </Grid>
      <Grid item sm={6} md={3}>
        <DropDownField
          label="X Marker"
          onChange={v => (store.xColor = v)}
          value={store.xColor}
          choices={store.colors}
        />
      </Grid>
      <Grid item sm={6} md={3}>
        <DropDownField
          label="Watermark"
          onChange={v => (store.watermarkColor = v)}
          value={store.watermarkColor}
          choices={store.colors}
        />
      </Grid>
      <Grid item sm={6} md={3}>
        <MillimeterField
          label="Unprintable Margin"
          onChange={v => (store.printGap = v)}
          value={store.printGap}
        />
      </Grid>
    </Grid>
  );
};

export default observer(CustomSettings);
