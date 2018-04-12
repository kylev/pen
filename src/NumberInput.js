import React from "react";

import { InputNumber } from "antd";

const NumberInput = ({ min, max, onChange, step, value }) => {
  return (
    <InputNumber
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      step={step}
      parser={Number}
    />
  );
};

export default NumberInput;
