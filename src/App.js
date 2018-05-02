import React from "react";

import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";

import "./App.css";

import { gaWatchStore } from "./ga";
import Header from "./Header";
import Footer from "./Footer";
import PaperDisplay from "./PaperDisplay";

import store from "./store";
gaWatchStore(store);

const theme = createMuiTheme({});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Header store={store} />
      <PaperDisplay store={store} />
      <Footer />
    </MuiThemeProvider>
  );
};

export default App;
