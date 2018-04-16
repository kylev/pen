import React from "react";
import { observer } from "mobx-react";

import { Typography } from "material-ui";
import TextField from "material-ui/TextField";
import Grid from "material-ui/Grid";

import ColFormItem from "./ColFormItem";
import DropDown from "./DropDown";

const GuideLineSettings = ({ line, colors }) => {
  return (
    <Grid container spacing={24}>
      <Grid item xs={12} style={{ paddingBottom: 0 }}>
        <Typography variant="subheading">Angle Guides</Typography>
      </Grid>
      <ColFormItem xs={3} label="Color">
        <DropDown
          value={line.color}
          choices={colors}
          onChange={v => (line.color = v)}
        />
      </ColFormItem>

      <Grid item xs={3}>
        <TextField
          xs={3}
          label="Spacing"
          type="number"
          value={line.spacing}
          onChange={v => (line.spacing = v)}
        />
      </Grid>
    </Grid>
  );
};

export default observer(GuideLineSettings);
