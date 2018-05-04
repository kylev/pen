import React from "react";
import { observer } from "mobx-react";
import { translate } from "react-i18next";

import Grid from "material-ui/Grid";

import DropDownField from "./DropDownField";
import MillimeterField from "./MillimeterField";

const PaperSettings = ({ store, t }) => {
  return (
    <Grid container spacing={24}>
      <Grid item xs={6} md={4}>
        <DropDownField
          id="presets-field"
          label={"presets"}
          value={store.ratio}
          onChange={v => store.ratioPreset(v)}
          choices={store.ratioChoices}
        />
      </Grid>
      <Grid item sm={6} md={2}>
        <MillimeterField
          id="x-height-field"
          label={t("xheight")}
          min={0.1}
          step={0.1}
          value={store.xHeight}
          onChange={v => (store.xHeight = v)}
        />
      </Grid>
      <Grid item sm={6} md={3}>
        <DropDownField
          id="size-field"
          label={"pagesize"}
          value={store.pageSize}
          onChange={v => (store.pageSize = v)}
          choices={store.pageSizes}
        />
      </Grid>
      <Grid item sm={6} md={3}>
        <DropDownField
          id="orientation-field"
          label={"pageorientation"}
          value={store.orientation}
          onChange={v => (store.orientation = v)}
          choices={store.orientations}
        />
      </Grid>
    </Grid>
  );
};

export default translate()(observer(PaperSettings));
