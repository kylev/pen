import React from "react";
import { observer } from "mobx-react";
import { Col, Form, Row } from "antd";

import ColFormItem from "./ColFormItem";
import DropDown from "./DropDown";
import NumberInput from "./NumberInput";
import GuideLineSettings from "./GuideLineSettings";

const dashTypes = [
  { key: "none", name: "None" },
  { key: "even1cm", name: "1cm Even" }
];

let LineSetting = ({ label, line, colors }) => {
  return (
    <Row>
      <Col>{label}</Col>
      <ColFormItem span={8} label="Color">
        <DropDown
          value={line.color}
          choices={colors}
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
  const lineNames = ["ascender", "midline", "baseline", "descender"];
  return (
    <Form>
      <GuideLineSettings line={store.guideline} colors={store.colors} />
      {lineNames.map(ln => (
        <LineSetting
          label={store[ln].name}
          line={store[ln]}
          key={ln}
          colors={store.colors}
        />
      ))}
    </Form>
  );
};

export default observer(LineSettings);
