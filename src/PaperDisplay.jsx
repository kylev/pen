import React from "react";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import PracticePage from "./PracticePage";

const PaperDisplay = ({ store }) => {
  return (
    <div style={{ flexGrow: 1, overflow: "hidden" }}>
      <Grid container justify="center">
        <Grid>
          <Paper>
            <PracticePage store={store} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

const styles = theme => {
  return {
    root: {
      flexGrow: 1,
      overflow: "hidden",
      backgroundColor: theme.palette.background.default
    },
    paper: { padding: 20, margin: 20 }
  };
};

export default PaperDisplay;
