import React from "react";
import { observer } from "mobx-react";
import { Col, Form, Row } from "antd";

import ColFormItem from "./ColFormItem";
import DropDown from "./DropDown";
import NumberInput from "./NumberInput";
import GuideLineSettings from "./GuideLineSettings";

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

let LineSetting = ({ label, line }) => {
  return (
    <Row>
      <Col>{label}</Col>
      <ColFormItem span={8} label="Color">
        <DropDown
          value={line.color}
          choices={lineColors}
          onChange={v => (line.color = v)}
        />
      </ColFormItem>
      <ColFormItem span={8} label="Dash">
        <DropDown
          value={line.dash}
          choices={dashTypes}
          onChange={v => (line.dash = v)}
        />
      </ColFormItem>
      <ColFormItem span={8} label="Thickness">
        <NumberInput
          value={line.thickness}
          step={0.1}
          onChange={v => (line.thickness = v)}
        />
      </ColFormItem>
    </Row>
  );
};
LineSetting = observer(LineSetting);

const LineSettings = ({ store }) => {
  const lineNames = ["headline", "midline", "baseline"];
  return (
    <Form>
      {lineNames.map(ln => (
        <LineSetting line={store[ln]} label={ln} key={ln} />
      ))}
      <GuideLineSettings line={store.guideline} />
    </Form>
  );
};

export default observer(LineSettings);
