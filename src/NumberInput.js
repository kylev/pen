import React from "react";

import { InputNumber } from "antd";

const NumberInput = ({ min, max, onChange, value }) => {
  return (
    <InputNumber
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      parser={Number}
    />
  );
};

export default NumberInput;
