import React from "react";

const DropDown = ({ choices, label, onChange, value }) => {
  return (
    <select onChange={onChange} value={value}>
      {choices.map(p => (
        <option value={p.key} key={p.key}>
          {p.name}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
