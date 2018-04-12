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
        <ColFormItem span={8} label="Margin">
          <NumberInput
            min={0}
            max={20}
            value={store.margin}
            onChange={v => (store.margin = v)}
          />
        </ColFormItem>
      </Row>
      <Row>
        <ColFormItem span={8} label="Gap">
          <NumberInput
            min={0}
            max={100}
            value={store.gap}
            onChange={v => (store.gap = v)}
          />
        </ColFormItem>
      </Row>
    </Form>
  );
};

export default observer(PaperSettings);
