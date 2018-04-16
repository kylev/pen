import React from "react";

import Grid from "material-ui/Grid";

import PracticePage from "./PracticePage";

const PaperDisplay = ({ store }) => {
  return (
    <Grid container xs={12} justify="center">
      <Grid item>
        <PracticePage store={store} />
      </Grid>
    </Grid>
  );
};

export default PaperDisplay;
