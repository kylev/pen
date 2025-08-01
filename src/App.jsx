import React from "react";

import { I18nextProvider } from "react-i18next";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import "./App.css";

import { gaWatchStore, gaErrorReport, gaLangChange } from "./ga";
import DocTitle from "./DocTitle";
import Header from "./Header";
import Footer from "./Footer";
import PaperDisplay from "./PaperDisplay";

import i18n from "./i18n";
import store from "./store";
gaWatchStore(store);

i18n.on("languageChanged", (lng) => {
  gaLangChange(lng);
  window.document.documentElement.setAttribute('lang', lng);
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#f50057",
        },
      },
    },
  },
});

class App extends React.Component {
  componentDidCatch(error, info) {
    gaErrorReport(error);
    console.error("Error caught in App component:", error, info);
  }

  render() {
    return (
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <DocTitle store={store} />
          <Header store={store} />
          <PaperDisplay store={store} />
          <Footer />
        </ThemeProvider>
      </I18nextProvider>
    );
  }
}

export default App;
