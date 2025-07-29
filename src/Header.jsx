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
import Color from "color";


function tabProps(index) {
  return {
    id: `tab-${index}`,
    value: index,
    "aria-controls": `tabpanel-${index}`,
    sx: {
      '&.Mui-selected': {
        color: '#ffffff',
      }
    },
  };
}

function tabPanelProps(index) {
  return {
    id: `tabpanel-${index}`,
    "aria-labelledby": `tab-${index}`,
    "aria-role": "tabpanel",
  };
}

class Header extends React.Component {
  state = { active: "basic" };

  render() {
    const { store, t } = this.props;
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
              {t("title")}
            </Typography>
            <HeaderButtons />
          </Toolbar>
          {/* <Box sx={{ borderBottom: 1 }}> */}
            <Tabs
              onChange={(e, active) => this.setState({ active })}
              value={this.state.active}
            >
              <Tab label={t("tabNames.basic")} {...tabProps("basic")} />
              <Tab label={t("tabNames.custom")} {...tabProps("custom")} />
              <Tab label={t("tabNames.lines")} {...tabProps("lines")} />
              {store.isDev && <Tab label={t("tabNames.debug")} {...tabProps("debug")} />}
            </Tabs>
          {/* </Box> */}
        </AppBar>
        {/* <Box sx={{ flexGrow: 1 }}> */}
        <Paper square style={{ padding: 20, marginBottom: 4 }}>
          <BasicSettings store={store} hidden={this.state.active !== "basic"} {...tabPanelProps("basic")} />
          <CustomSettings store={store} hidden={this.state.active !== "custom"} {...tabPanelProps("custom")} />
          <LineSettings store={store} hidden={this.state.active !== "lines"} {...tabPanelProps("lines")} />
          <LineSetDebug lineSet={store.lineSet} hidden={this.state.active !== "debug"} {...tabPanelProps("debug")} />
        </Paper>
        {/* </Box> */}
      </Box>
    );
  }
}

export default withTranslation()(Header);
