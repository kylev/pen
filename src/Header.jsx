import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import BasicSettings from "./BasicSettings";
import CustomSettings from "./CustomSettings";
import HeaderButtons from "./HeaderButtons";
import LineSetDebug from "./LineSetDebug";
import LineSettings from "./LineSettings";


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
    role: "tabpanel",
    "aria-labelledby": `tab-${index}`,
  };
}

function Header({ store }) {
  const { t } = useTranslation();
  const [active, setActive] = useState("basic");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
            {t("title")}
          </Typography>
          <HeaderButtons />
        </Toolbar>
        <Tabs
          onChange={(e, v) => setActive(v)}
          value={active}
        >
          <Tab label={t("tabNames.basic")} {...tabProps("basic")} />
          <Tab label={t("tabNames.custom")} {...tabProps("custom")} />
          <Tab label={t("tabNames.lines")} {...tabProps("lines")} />
          {store.isDev && <Tab label={t("tabNames.debug")} {...tabProps("debug")} />}
        </Tabs>
      </AppBar>
      <Paper square style={{ padding: 20, marginBottom: 4 }}>
        <BasicSettings store={store} hidden={active !== "basic"} {...tabPanelProps("basic")} />
        <CustomSettings store={store} hidden={active !== "custom"} {...tabPanelProps("custom")} />
        <LineSettings store={store} hidden={active !== "lines"} {...tabPanelProps("lines")} />
        <LineSetDebug lineSet={store.lineSet} hidden={active !== "debug"} {...tabPanelProps("debug")} />
      </Paper>
    </Box>
  );
};

export default Header;
