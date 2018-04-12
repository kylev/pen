import React from "react";
import { observer } from "mobx-react";
import { Form } from "antd";

import DropDown from "./DropDown";
import NumberInput from "./NumberInput";

const PaperSettings = ({ store }) => {
  const itemStyle = { labelCol: { span: 8 }, wrapperCol: { span: 16 } };
  return (
    <Form>
      <Form.Item label="Size" {...itemStyle}>
        <DropDown
          onChange={v => (store.pageSize = v)}
          value={store.pageSize}
          choices={store.pageSizes}
        />
      </Form.Item>
      <Form.Item label="Orentation" {...itemStyle}>
        <DropDown
          onChange={v => (store.orientation = v)}
          value={store.orientation}
          choices={store.orientations}
        />
      </Form.Item>
      <Form.Item label="Margin" {...itemStyle}>
        <NumberInput
          min={0}
          max={20}
          value={store.margin}
          onChange={v => (store.margin = v)}
        />
      </Form.Item>
    </Form>
  );
};

export default observer(PaperSettings);
