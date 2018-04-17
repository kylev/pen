import React from "react";
import { observer } from "mobx-react";

import { Typography } from "material-ui";
import Grid from "material-ui/Grid";

import ColFormItem from "./ColFormItem";
import DropDown from "./DropDown";
import MillimeterField from "./MillimeterFeed";

const dashTypes = [
  { key: "none", name: "None" },
  { key: "even1cm", name: "1cm Even" }
];

let LineSetting = ({ label, line, colors }) => {
  return (
    <Grid container spacing={24} style={{ marginBottom: 24 }}>
      <Grid item xs={12} style={{ paddingBottom: 0 }}>
        <Typography variant="subheading">{label}</Typography>
      </Grid>
      <ColFormItem xs={6} md={4} label="Color">
        <DropDown
          value={line.color}
          choices={colors}
          onChange={e => (line.color = e.target.value)}
        />
      </ColFormItem>
      <ColFormItem xs={5} md={4} label="Dash">
        <DropDown
          value={line.dash}
          choices={dashTypes}
          onChange={e => (line.dash = e.target.value)}
        />
      </ColFormItem>
      <Grid item xs={12} md={4}>
        <MillimeterField
          label="Thickness"
          value={line.thickness}
          min={0.1}
          step={0.1}
          onChange={v => (line.thickness = v)}
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
        key={ln}
      />
    )),
    <LineSetting
      label={store.guideline.name}
      line={store.guideline}
      colors={store.colors}
      key="guide"
    />
  ];
};

export default observer(LineSettings);
