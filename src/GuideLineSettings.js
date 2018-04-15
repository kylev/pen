import React from "react";
import { observer } from "mobx-react";
import { Col, InputNumber, Row } from "antd";

import ColFormItem from "./ColFormItem";
import DropDown from "./DropDown";

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
      <ColFormItem span={8} label="Spacing">
        <InputNumber value={line.spacing} onChange={v => (line.spacing = v)} />
      </ColFormItem>
    </Row>
  );
};

export default observer(GuideLineSettings);
