import React from "react";

import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";

import PracticePage from "./PracticePage";

const PaperDisplay = ({ classes, store }) => {
  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item padding={24}>
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
      padding: theme.spacing.unit * 3,
      overflow: "scroll"
    },
    paper: { padding: 20 }
  };
};

export default withStyles(styles)(PaperDisplay);
