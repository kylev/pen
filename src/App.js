import React from "react";

import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";

import "./App.css";

import Header from "./Header";
import Footer from "./Footer";
import PracticePage from "./PracticePage";

import store from "./store";

const theme = createMuiTheme({});

const App = ({ classes }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Header store={store} />
      <div style={{ flexGrow: 1 }}>
        <PracticePage store={store} />
      </div>
      <Footer />
    </MuiThemeProvider>
  );
};

//const styles = { footerIcons: { paddingLeft: 8, paddingRight: 8 } };

export default App;
