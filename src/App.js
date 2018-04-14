import React, { Component } from "react";
import { Button, Layout, Row, Col } from "antd";
import download from "downloadjs";

import "./App.css";

import PracticePage from "./PracticePage";
import SettingsForm from "./SettingsForm";

import store from "./store";

const doPrinting = e => {
  const svg = document.getElementById("theSVG");

  const printWindow = window.open("", "printwindow", "status=1");
  printWindow.document.write(`
    <html>
      <body style="margin: 0; padding: 0;" onAfterPrint="self.close()">${
        svg.outerHTML
      }</body>
    </html>
  `);

  printWindow.print();
};

const doSaving = e => {
  const svg = document.getElementById("theSVG");

  download(svg.outerHTML, "Something.svg", "image/svg");
};

class App extends Component {
  render() {
    return (
      <Layout>
        <Layout.Header style={{ alignItems: "space-between" }}>
          <h1 style={{ color: "white", float: "left" }}>
            Penmanship Practice Sheets
          </h1>
          <Button
            icon="printer"
            onClick={doPrinting}
            style={{ float: "right", margin: "16px 0px 16px 24px " }}
          />
          <Button
            icon="save"
            onClick={doSaving}
            style={{ float: "right", margin: "16px 0px 16px 24px " }}
          />
        </Layout.Header>
        <Layout.Content style={{ padding: 16 }}>
          <Row>
            <Col span={24}>
              <SettingsForm store={store} />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <PracticePage store={store} />
            </Col>
          </Row>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: "center" }}>
          Kyle V ©2018 Created with <a href="https://ant.design/">Ant Design</a>{" "}
          and <a href="https://reactjs.org/">React</a> /{" "}
          <a href="https://mobx.js.org">Mobx</a>
        </Layout.Footer>
      </Layout>
    );
  }
}

export default App;
