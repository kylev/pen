import React from "react";
import { I18nextProvider } from "react-i18next";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import "./App.css";

import { gaWatchStore, gaErrorReport } from "./ga";
import DocTitle from "./DocTitle";
import Header from "./Header";
import Footer from "./Footer";
import PaperDisplay from "./PaperDisplay";

import i18n from "./i18n";
import store from "./store";
gaWatchStore(store);

const theme = createMuiTheme({});

class App extends React.Component {
  componentDidCatch(error, info) {
    gaErrorReport(error);
  }

  render() {
    return (
      <I18nextProvider i18n={i18n}>
        <MuiThemeProvider theme={theme}>
          <DocTitle store={store} />
          <Header store={store} />
          <PaperDisplay store={store} />
          <Footer />
        </MuiThemeProvider>
      </I18nextProvider>
    );
  }
}

export default App;
