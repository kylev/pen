import React, { Component } from "react";
import { Layout } from "antd";

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
        <Layout>
          <Layout.Sider style={{ paddingLeft: 12 }}>
            <SettingsForm store={store} />
          </Layout.Sider>
          <Layout.Content style={{ padding: 24 }}>
            <PracticePage store={store} />
          </Layout.Content>
        </Layout>
        <Layout.Footer style={{ textAlign: "center" }}>
          Kyle VanderBeek ©2018 Created with{" "}
          <a href="https://ant.design/">Ant Design</a>
        </Layout.Footer>
      </Layout>
    );
  }
}

export default App;
