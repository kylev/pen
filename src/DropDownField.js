import React from "react";
import { FormControl } from "material-ui/Form";
import { InputLabel } from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import Select from "material-ui/Select";

import DropDown from "./DropDown";

const DropDownField = ({ label, onChange, choices, id, ...rest }) => {
  return (
    <FormControl>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Select onChange={e => onChange(e.target.value)} id={id} {...rest}>
        {choices.map(p => (
          <MenuItem value={p.key} key={p.key}>
            {p.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDownField;
