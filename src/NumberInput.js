import React from "react";

import { InputNumber } from "antd";

const NumberInput = ({
  formatter,
  min,
  max,
  onChange,
  parser,
  step,
  value
}) => {
  return (
    <InputNumber
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      step={step}
      parser={parser}
      formatter={formatter}
    />
  );
};

export default NumberInput;
