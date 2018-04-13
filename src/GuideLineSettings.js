import React from "react";
import { observer } from "mobx-react";
import { Col, Row } from "antd";

import ColFormItem from "./ColFormItem";
import DropDown from "./DropDown";
import NumberInput from "./NumberInput";

const GuideLineSettings = ({ line, colors }) => {
  return (
    <Row>
      <Col>Angle Guides</Col>
      <ColFormItem span={8} label="Color">
        <DropDown
          value={line.color}
          choices={colors}
          onChange={v => (line.color = v)}
        />
      </ColFormItem>
      <ColFormItem span={8} label="Angle">
        <NumberInput value={line.angle} onChange={v => (line.angle = v)} />
      </ColFormItem>
      <ColFormItem span={8} label="Spacing">
        <NumberInput value={line.spacing} onChange={v => (line.spacing = v)} />
      </ColFormItem>
    </Row>
  );
};

export default observer(GuideLineSettings);
