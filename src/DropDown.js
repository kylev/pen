import React from "react";
import { MenuItem } from "material-ui/Menu";
import Select from "material-ui/Select";

const DropDown = ({ choices, label, onChange, value }) => {
  return (
    <Select onChange={onChange} value={value}>
      {choices.map(p => (
        <MenuItem value={p.key} key={p.key}>
          {p.name}
        </MenuItem>
      ))}
    </Select>
  );
};

export default DropDown;
