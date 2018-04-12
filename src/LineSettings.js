import React from "react";
import { observer } from "mobx-react";
import { Col, Form, Row } from "antd";

import DropDown from "./DropDown";
import NumberInput from "./NumberInput";

const lineColors = [
  {
    key: "black",
    name: "Black"
  },
  { key: "red", name: "Red" },
  { key: "green", name: "Green" }
];

const dashTypes = [
  { key: "none", name: "None" },
  { key: "even1cm", name: "1cm Even" }
];

let LineSetting = ({ line }) => {
  return (
    <Row>
      <Col span={6}>
        <Form.Item label="Color">
          <DropDown
            value={line.color}
            choices={lineColors}
            onChange={v => (line.color = v)}
          />
        </Form.Item>
      </Col>
      <Col span={6}>
        <Form.Item label="Dash">
          <DropDown
            value={line.dash}
            choices={dashTypes}
            onChange={v => (line.dash = v)}
          />
        </Form.Item>
      </Col>
      <Col span={6}>
        <Form.Item label="Thickness">
          <NumberInput
            value={line.thickness}
            step={0.1}
            onChange={v => (line.thickness = v)}
          />
        </Form.Item>
      </Col>
    </Row>
  );
};
LineSetting = observer(LineSetting);

const LineSettings = ({ store }) => {
  const itemStyle = { labelCol: { span: 8 }, wrapperCol: { span: 16 } };

  const lineNames = ["headline", "midline", "baseline"];
  return (
    <Form>
      {lineNames.map(ln => <LineSetting line={store[ln]} key={ln} />)}
    </Form>
  );
};

export default observer(LineSettings);
