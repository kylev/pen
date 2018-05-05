import React from "react";
import { observer } from "mobx-react";
import { translate } from "react-i18next";

import { Typography } from "material-ui";
import Grid from "material-ui/Grid";

import ColorDropDownField from "./ColorDropDownField";
import DropDownField from "./DropDownField";
import MillimeterField from "./MillimeterField";

let LineSetting = ({ label, line, dashes, t }) => {
  return (
    <Grid container spacing={24} style={{ marginBottom: 24 }}>
      <Grid item xs={12} style={{ paddingBottom: 0 }}>
        <Typography variant="subheading">{t(label)}</Typography>
      </Grid>
      <Grid item xs={6} md={4}>
        <ColorDropDownField
          label={"color"}
          value={line.color}
          onChange={v => (line.color = v)}
        />
      </Grid>
      <Grid item xs={6} md={4}>
        <DropDownField
          label={"dash"}
          value={line.dash}
          choices={dashes}
          onChange={v => (line.dash = v)}
          disabled={line.color === "transparent"}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <MillimeterField
          label={"thickness"}
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
LineSetting = translate()(observer(LineSetting));

const LineSettings = ({ store }) => {
  const lineNames = ["ascender", "midline", "baseline", "descender"];
  return (
    <div>
      {lineNames.map(ln => (
        <LineSetting
          label={ln}
          line={store[ln]}
          dashes={store.dashChoices}
          key={ln}
        />
      ))}
      <LineSetting
        label={"guideline"}
        line={store.guideline}
        dashes={store.dashChoices}
        key="guide"
      />
      <LineSetting
        label={"halfline"}
        line={store.halfLine}
        dashes={store.dashChoices}
        key="halfline"
      />
    </div>
  );
};

export default observer(LineSettings);
