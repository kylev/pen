import React from "react";

import { AppBar, Toolbar, Typography } from "material-ui";
import { withStyles } from "material-ui/styles";
import Tabs, { Tab } from "material-ui/Tabs";

import HeaderButtons from "./HeaderButtons";
import SettingsForm from "./SettingsForm";

class Header extends React.Component {
  state = { active: "paper" };

  render() {
    const { classes, store } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Penmanship Practice Sheets
            </Typography>
            <HeaderButtons />
          </Toolbar>
          <Tabs
            className={classes.tabs}
            onChange={(e, active) => this.setState({ active })}
            value={this.state.active}
          >
            <Tab label="Paper" value="paper" />
            <Tab label="Lines" value="lines" />
          </Tabs>
        </AppBar>
        <SettingsForm store={store} active={this.state.active} />
      </div>
    );
  }
}

const styles = theme => {
  return {
    root: {
      flexGrow: 1
    },
    flex: { flex: 1 },
    tabs: {
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3
    }
  };
};

export default withStyles(styles)(Header);
