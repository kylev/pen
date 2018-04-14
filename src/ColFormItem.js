import React from "react";

import { Col, Form } from "antd";

const ColFormItem = ({
  fieldSpan = 16,
  label,
  labelSpan = 8,
  span,
  children
}) => {
  const itemStyle = {
    labelCol: { span: labelSpan },
    wrapperCol: { span: fieldSpan }
  };

  return (
    <Col span={span}>
      <Form.Item label={label} {...itemStyle}>
        {children}
      </Form.Item>
    </Col>
  );
};

export default ColFormItem;
