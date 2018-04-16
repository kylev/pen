import React from "react";
import { observer } from "mobx-react";

import { Typography } from "material-ui";
import Grid from "material-ui/Grid";

import ColFormItem from "./ColFormItem";
import DropDown from "./DropDown";
import GuideLineSettings from "./GuideLineSettings";
import MillimeterField from "./MillimeterFeed";

const dashTypes = [
  { key: "none", name: "None" },
  { key: "even1cm", name: "1cm Even" }
];

let LineSetting = ({ label, line, colors }) => {
  return (
    <Grid container spacing={16}>
      <Grid item xs={12}>
        <Typography variant="subheading">{label}</Typography>
      </Grid>
      <ColFormItem xs={4} label="Color">
        <DropDown
          value={line.color}
          choices={colors}
          onChange={e => (line.color = e.target.value)}
        />
      </ColFormItem>
      <ColFormItem xs={4} label="Dash">
        <DropDown
          value={line.dash}
          choices={dashTypes}
          onChange={e => (line.dash = e.target.value)}
        />
      </ColFormItem>
      <Grid item xs={4}>
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
    <GuideLineSettings
      key="guide"
      line={store.guideline}
      colors={store.colors}
    />,
    ...lineNames.map(ln => (
      <LineSetting
        label={store[ln].name}
        line={store[ln]}
        key={ln}
        colors={store.colors}
      />
    ))
  ];
};

export default observer(LineSettings);
