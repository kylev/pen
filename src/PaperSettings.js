import React from "react";
import { observer } from "mobx-react";
import { Col, Form, Row } from "antd";

import ColFormItem from "./ColFormItem";
import DropDown from "./DropDown";
import NumberInput from "./NumberInput";
import RatiosInput from "./RatiosInput";

const PaperSettings = ({ store }) => {
  return (
    <Form>
      <Row>
        <ColFormItem span={8} label="Presets">
          <DropDown
            onChange={store.ratioPreset}
            value={store.ratio}
            choices={store.ratioChoices}
          />
        </ColFormItem>
        <Col span={16}>
          <Form.Item
            label={"Ratios"}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
          >
            <RatiosInput store={store} />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <ColFormItem span={8} label="Unit Height">
          <NumberInput
            min={0.1}
            max={20}
            step={0.1}
            value={store.nibHeight}
            onChange={v => (store.nibHeight = v)}
            formatter={v => `${v}mm`}
          />
        </ColFormItem>
        <ColFormItem span={8} label="Size">
          <DropDown
            onChange={v => (store.pageSize = v)}
            value={store.pageSize}
            choices={store.pageSizes}
          />
        </ColFormItem>
        <ColFormItem span={8} label="Orentation">
          <DropDown
            onChange={v => (store.orientation = v)}
            value={store.orientation}
            choices={store.orientations}
          />
        </ColFormItem>
      </Row>
      <Row>
        <ColFormItem span={8} label="Gap Color">
          <DropDown
            onChange={v => (store.gapColor = v)}
            value={store.gapColor}
            choices={store.colors}
          />
        </ColFormItem>
        <ColFormItem span={8} label="Watermark">
          <DropDown
            onChange={v => (store.watermarkColor = v)}
            value={store.watermarkColor}
            choices={store.colors}
          />
        </ColFormItem>
      </Row>
    </Form>
  );
};

export default observer(PaperSettings);
