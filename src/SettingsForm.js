import React from "react";

import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";

import BasicSettings from "./BasicSettings";
import CustomSettings from "./CustomSettings";
import LineSettings from "./LineSettings";
import LineSetDebug from "./LineSetDebug";

const SettingsForm = ({ active, classes, store }) => {
  return (
    <div className={classes.root}>
      <Paper square style={{ padding: 24, marginBottom: 4 }}>
        {active === "basic" && <BasicSettings store={store} />}
        {active === "custom" && <CustomSettings store={store} />}
        {active === "lines" && <LineSettings store={store} />}
        {active === "debug" && <LineSetDebug lineSet={store.lineSet} />}
      </Paper>
    </div>
  );
};

const styles = theme => ({
  root: { backgroundColor: theme.palette.background.default, flexGrow: 1 }
});

//export default observer(SettingsForm);
export default withStyles(styles)(SettingsForm);
