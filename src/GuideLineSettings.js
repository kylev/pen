import React from "react";
import { observer } from "mobx-react";
import { Col, Form, Row } from "antd";

import ColFormItem from "./ColFormItem";
import DropDown from "./DropDown";
import NumberInput from "./NumberInput";

const lineColors = [
  {
    key: "black",
    name: "Black"
  },
  { key: "green", name: "Green" },
  { key: "grey", name: "Grey" },
  { key: "pink", name: "Pink" },
  { key: "red", name: "Red" }
];

const dashTypes = [
  { key: "none", name: "None" },
  { key: "even1cm", name: "1cm Even" }
];

const GuideLineSettings = ({ line }) => {
  return (
    <Row>
      <Col>Guide Lines</Col>
      <ColFormItem span={8} label="Color">
        <DropDown
          value={line.color}
          choices={lineColors}
          onChange={v => (line.color = v)}
        />
      </ColFormItem>
      <ColFormItem span={8} label="Angle">
        <NumberInput value={line.angle} onChange={v => (line.angle = v)} />
      </ColFormItem>
    </Row>
  );
};

export default observer(GuideLineSettings);
