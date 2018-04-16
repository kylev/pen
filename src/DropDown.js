import React from "react";
import { FormControl } from "material-ui/Form";
import { InputLabel } from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import Select from "material-ui/Select";

const DropDown = ({ choices, label, onChange, value }) => {
  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Select onChange={e => onChange(e.target.value)} value={value}>
        {choices.map(p => (
          <MenuItem value={p.key} key={p.key}>
            {p.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDown;
