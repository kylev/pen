import React from "react";
import { Select } from "antd";

const DropDown = ({ choices, label, onChange, value }) => {
  return (
    <Select onChange={onChange} value={value}>
      {choices.map(p => (
        <Select.Option value={p.key} key={p.key}>
          {p.name}
        </Select.Option>
      ))}
    </Select>
  );
};

export default DropDown;
