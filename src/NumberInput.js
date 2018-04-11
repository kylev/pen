import React from "react";

const NumberInput = ({ onChange, value }) => {
  return <input type="number" value={value} onChange={onChange} />;
};

export default NumberInput;
