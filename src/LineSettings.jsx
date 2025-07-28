import React from "react";

import { observer } from "mobx-react";
import { withTranslation } from "react-i18next";
import { Box, Grid, Typography } from "@mui/material";

import ColorDropDownField from "./ColorDropDownField";
import DashDropDownField from "./DashDropDownField";
import MillimeterField from "./MillimeterField";

let LineSetting = ({ label, line, t }) => {
  return (
    <Grid container spacing={2} style={{ marginBottom: 24 }}>
      <Grid size={12} style={{ paddingBottom: 0 }}>
        <Typography variant="subtitle1">{t(label)}</Typography>
      </Grid>
      <Grid size={{ xs: 6, sm: 4 }}>
        <ColorDropDownField
          label={"color"}
          value={line.color}
          onChange={v => (line.color = v)}
        />
      </Grid>
      <Grid size={{ xs: 6, sm: 4 }}>
        <DashDropDownField
          label={"dash"}
          value={line.dash}
          onChange={v => (line.dash = v)}
          disabled={line.color === "transparent"}
        />
      </Grid>
      <Grid size={{ xs: 6, sm: 4 }}>
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

LineSetting = withTranslation()(observer(LineSetting));

const LineSettings = ({ hidden, store }) => {
  const lineNames = ["ascender", "midline", "baseline", "descender"];
  return (
    <Box hidden={hidden}>
      {lineNames.map(ln => (
        <LineSetting label={ln} line={store[ln]} key={ln} />
      ))}
      <LineSetting label={"guideline"} line={store.guideline} key="guide" />
      <LineSetting label={"halfline"} line={store.halfLine} key="halfline" />
    </Box>
  );
};

const MobxLineSettings = observer(LineSettings);
export default MobxLineSettings;
