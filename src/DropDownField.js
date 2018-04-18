import React from "react";
import { FormControl } from "material-ui/Form";
import { InputLabel } from "material-ui/Input";

import DropDown from "./DropDown";

const DropDownField = ({ label, onChange, ...rest }) => {
  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <DropDown onChange={e => onChange(e.target.value)} {...rest} />
    </FormControl>
  );
};

export default DropDownField;
