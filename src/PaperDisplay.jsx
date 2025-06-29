import React from "react";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { withStyles } from "@mui/material/styles";

import PracticePage from "./PracticePage";

const PaperDisplay = ({ classes, store }) => {
  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item>
          <Paper className={classes.paper}>
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

export default withStyles(styles)(PaperDisplay);
