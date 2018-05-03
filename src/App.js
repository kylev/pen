import React from "react";
import { I18nextProvider } from "react-i18next";

import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";

import "./App.css";

import { gaWatchStore } from "./ga";
import Header from "./Header";
import Footer from "./Footer";
import PaperDisplay from "./PaperDisplay";

import i18n from "./i18n";
import store from "./store";
gaWatchStore(store);

const theme = createMuiTheme({});

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <MuiThemeProvider theme={theme}>
        <Header store={store} />
        <PaperDisplay store={store} />
        <Footer />
      </MuiThemeProvider>
    </I18nextProvider>
  );
};

export default App;
