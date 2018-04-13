import React from "react";
import { observer } from "mobx-react";
import { Form, Row } from "antd";

import ColFormItem from "./ColFormItem";
import DropDown from "./DropDown";
import NumberInput from "./NumberInput";

const PaperSettings = ({ store }) => {
  return (
    <Form>
      <Row>
        <ColFormItem span={8} label="Ratios">
          <DropDown
            onChange={v => (store.ratio = v)}
            value={store.ratio}
            choices={store.ratioChoices}
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
        <ColFormItem span={8} label="Nib Width">
          <NumberInput
            min={0.1}
            max={20}
            step={0.1}
            value={store.nibHeight}
            onChange={v => (store.nibHeight = v)}
          />
        </ColFormItem>
        <ColFormItem span={8} label="Gap Color">
          <DropDown
            onChange={v => (store.gapColor = v)}
            value={store.gapColor}
            choices={store.colors}
          />
        </ColFormItem>
      </Row>
    </Form>
  );
};

export default observer(PaperSettings);
