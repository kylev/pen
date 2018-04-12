import React, { Component } from "react";
import { Layout, Row, Col } from "antd";

import "./App.css";

import PracticePage from "./PracticePage";
import SettingsForm from "./SettingsForm";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Layout>
        <Layout.Header>
          <h1 style={{ color: "white" }}>Pen Page</h1>
        </Layout.Header>
        <Layout.Content style={{ padding: 16 }}>
          <Row gutter={16}>
            <Col span={6}>
              <SettingsForm store={store} />
            </Col>
            <Col span={18}>
              <PracticePage store={store} />
            </Col>
          </Row>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: "center" }}>
          Kyle VanderBeek ©2018 Created with{" "}
          <a href="https://ant.design/">Ant Design</a>
        </Layout.Footer>
      </Layout>
    );
  }
}

export default App;
