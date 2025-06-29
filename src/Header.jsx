import React from "react";

import { withTranslation } from "react-i18next";
import AppBar from "@mui/material/AppBar";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { withStyles } from "@mui/material/styles";

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

export default withStyles(styles)(withTranslation()(Header));
