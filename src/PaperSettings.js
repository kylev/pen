import React from "react";
import { observer } from "mobx-react";
import { Col, Form, InputNumber, Row } from "antd";

import ColFormItem from "./ColFormItem";
import DropDown from "./DropDown";
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
        <Col span={8}>
          <Form.Item
            label={"Ratios"}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
          >
            <RatiosInput store={store} />
          </Form.Item>
        </Col>
        <ColFormItem span={8} label="X">
          <DropDown
            onChange={v => (store.xColor = v)}
            value={store.xColor}
            choices={store.colors}
          />
        </ColFormItem>
      </Row>
      <Row>
        <ColFormItem span={8} label="X Height">
          <InputNumber
            min={0.1}
            max={40}
            step={0.1}
            value={store.xHeight}
            onChange={v => (store.xHeight = v)}
            formatter={v => `${v}mm`}
            parser={v => v.replace(/m*/g, "")}
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
        <ColFormItem span={8} label="Angle">
          <InputNumber
            min={0}
            max={90}
            value={store.guideline.angle}
            formatter={v => `${v}°`}
            parser={v => v.replace("°", "")}
            onChange={v => {
              store.ratioPreset("custom");
              store.guideline.angle = v;
            }}
          />
        </ColFormItem>
      </Row>
    </Form>
  );
};

export default observer(PaperSettings);
