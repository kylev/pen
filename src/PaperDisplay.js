import React from "react";

import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";

import PracticePage from "./PracticePage";

const PaperDisplay = ({ classes, store }) => {
  return (
    <Grid container className={classes.root} justify="center" spacing={24}>
      <Grid item>
        <Paper style={{ padding: 24 }}>
          <PracticePage store={store} />
        </Paper>
      </Grid>
    </Grid>
  );
};

const styles = theme => {
  return {
    root: { flexGrow: 1, marginTop: 24 }
  };
};

export default withStyles(styles)(PaperDisplay);
