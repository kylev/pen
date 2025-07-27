import React from "react";

import { withTranslation } from "react-i18next";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import HeaderButtons from "./HeaderButtons";
import BasicSettings from "./BasicSettings";
import CustomSettings from "./CustomSettings";
import LineSettings from "./LineSettings";
import LineSetDebug from "./LineSetDebug";

class Header extends React.Component {
  state = { active: "basic" };

  render() {
    const { store, t } = this.props;
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
              {t("title")}
            </Typography>
            <HeaderButtons />
          </Toolbar>
          <Tabs
            onChange={(e, active) => this.setState({ active })}
            value={this.state.active}
          >
            <Tab label={t("tabNames.basic")} aria-controls="tab-basic" value="basic" />
            <Tab label={t("tabNames.custom")} aria-controls="tab-custom" value="custom" />
            <Tab label={t("tabNames.lines")} aria-controls="tab-lines" value="lines" />
            {store.isDev && <Tab label={t("tabNames.debug")} aria-controls="tab-debug" value="debug" />}
          </Tabs>
        </AppBar>
        <div className={{ flexGrow: 1 }}>
          <Paper square style={{ padding: 24, marginBottom: 4 }}>
            <BasicSettings id={"tab-basic"} store={store} hidden={this.state.active !== "basic"} />
            <CustomSettings id={"tab-custom"} store={store} hidden={this.state.active !== "custom"} />
            <LineSettings id={"tab-lines"} store={store} hidden={this.state.active !== "lines"} />
            <LineSetDebug id={"tab-debug"} lineSet={store.lineSet} hidden={this.state.active !== "debug"} />
          </Paper>
        </div>
      </Box>
    );
  }
}

const styles = theme => {
  return {
    tabs: {
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3
    }
  };
};

export default withTranslation()(Header);
