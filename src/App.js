import React, { Component } from "react";
import { Button, Layout, Row, Col } from "antd";
import { AppBar, Toolbar, Typography } from "material-ui";
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from "material-ui/styles";
import IconButton from "material-ui/IconButton";
import Icon from "material-ui/Icon";
import download from "downloadjs";

import "./App.css";

import Header from "./Header";
import PracticePage from "./PracticePage";

import store from "./store";

const doPrintWindow = e => {
  const svg = document.getElementById("theSVG");

  const printWindow = window.open("", "printwindow", "status=1");
  printWindow.document.write(`
    <html>
      <body style="margin: 0; padding: 0;">${svg.outerHTML}</body>
    </html>
  `);
};

const doSaving = store => {
  const svg = document.getElementById("theSVG");

  download(
    svg.outerHTML,
    `pen-${store.ratio} ${store.pageSize}-${store.orientation}.svg`,
    "image/svg"
  );
};

class OldApp extends Component {
  render() {
    const styles = {};

    return (
      <Layout>
        <Layout.Header style={{ alignItems: "space-between" }}>
          <h1 style={{ color: "white", float: "left" }}>
            Penmanship Practice Sheets
          </h1>
          <Button
            icon="printer"
            type="primary"
            shape="circle"
            onClick={() => window.print()}
            style={{ float: "right", margin: "16px 0px 16px 24px " }}
          />
          <Button
            icon="copy"
            type="primary"
            shape="circle"
            onClick={doPrintWindow}
            style={{ float: "right", margin: "16px 0px 16px 24px " }}
          />
          <Button
            icon="save"
            type="primary"
            shape="circle"
            onClick={e => doSaving(store)}
            style={{ float: "right", margin: "16px 0px 16px 24px " }}
          />
        </Layout.Header>
        <Layout.Content style={{ padding: 16 }}>
          <Row>
            <Col span={24} />
          </Row>
          <div
            style={{
              width: "100%",
              textAlign: "center",
              padding: 16
            }}
          />
        </Layout.Content>
        <Layout.Footer style={{ textAlign: "center" }}>
          <a href="https://github.com/kylev/pen">
            <Icon type="github" style={styles.footerIcons} />
          </a>
          <a href="https://twitter.com/kylev">
            <Icon type="twitter" style={styles.footerIcons} />
          </a>
          Kyle V ©2018 Created with <a href="https://ant.design/">Ant Design</a>,{" "}
          <a href="https://reactjs.org/">React</a>
          {" and "}
          <a href="https://mobx.js.org">Mobx</a> while thinking about my mom, a
          teacher.{" "}
          <a href="https://github.com/kylev/pen/issues">Bugs? Suggestions?</a>
        </Layout.Footer>
      </Layout>
    );
  }
}

const TabContainer = props => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
};

const theme = createMuiTheme({});

const App = ({ classes }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Header store={store} />
      <div style={{ flexGrow: 1 }}>
        <PracticePage store={store} />
      </div>
    </MuiThemeProvider>
  );
};

//const styles = { footerIcons: { paddingLeft: 8, paddingRight: 8 } };

export default App;
