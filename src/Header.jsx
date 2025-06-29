import React from "react";

import { translate } from "react-i18next";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import HeaderButtons from "./HeaderButtons";
import SettingsForm from "./SettingsForm";

class Header extends React.Component {
  state = { active: "basic" };

  render() {
    const { classes, store, t } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              {t("title")}
            </Typography>
            <HeaderButtons />
          </Toolbar>
          <Tabs
            className={classes.tabs}
            onChange={(e, active) => this.setState({ active })}
            value={this.state.active}
          >
            <Tab label={t("tabNames.basic")} value="basic" />
            <Tab label={t("tabNames.custom")} value="custom" />
            <Tab label={t("tabNames.lines")} value="lines" />
            {store.isDev && <Tab label={t("tabNames.debug")} value="debug" />}
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

export default withStyles(styles)(translate()(Header));
