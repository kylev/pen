import React from "react";
import { observer } from "mobx-react";

import { Typography } from "material-ui";
import Grid from "material-ui/Grid";

import DropDownField from "./DropDownField";
import MillimeterField from "./MillimeterField";

let LineSetting = ({ label, line, colors, dashes }) => {
  return (
    <Grid container spacing={24} style={{ marginBottom: 24 }}>
      <Grid item xs={12} style={{ paddingBottom: 0 }}>
        <Typography variant="subheading">{label}</Typography>
      </Grid>
      <Grid item xs={6} md={4}>
        <DropDownField
          label="Color"
          value={line.color}
          choices={colors}
          onChange={v => (line.color = v)}
        />
      </Grid>
      <Grid item xs={6} md={4}>
        <DropDownField
          label="Dash"
          value={line.dash}
          choices={dashes}
          onChange={v => (line.dash = v)}
          disabled={line.color === "transparent"}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <MillimeterField
          label="Thickness"
          value={line.thickness}
          min={0.1}
          step={0.1}
          onChange={v => (line.thickness = v)}
          disabled={line.color === "transparent"}
        />
      </Grid>
    </Grid>
  );
};
LineSetting = observer(LineSetting);

const LineSettings = ({ store }) => {
  const lineNames = ["ascender", "midline", "baseline", "descender"];
  return [
    ...lineNames.map(ln => (
      <LineSetting
        label={store[ln].name}
        line={store[ln]}
        colors={store.colors}
        dashes={store.dashChoices}
        key={ln}
      />
    )),
    <LineSetting
      label={store.guideline.name}
      line={store.guideline}
      colors={store.colors}
      dashes={store.dashChoices}
      key="guide"
    />,
    <LineSetting
      label={store.halfLine.name}
      line={store.halfLine}
      colors={store.colors}
      dashes={store.dashChoices}
      key="half-line"
    />
  ];
};

export default observer(LineSettings);
