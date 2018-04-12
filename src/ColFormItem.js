import React from "react";

import { Col, Form } from "antd";

const ColFormItem = ({ label, span, children }) => {
  const itemStyle = { labelCol: { span: 8 }, wrapperCol: { span: 16 } };

  return (
    <Col span={span}>
      <Form.Item label={label} {...itemStyle}>
        {children}
      </Form.Item>
    </Col>
  );
};

export default ColFormItem;
