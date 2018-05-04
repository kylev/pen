import React from "react";
import { translate } from "react-i18next";

import { FormControl } from "material-ui/Form";
import { InputLabel } from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import Select from "material-ui/Select";

const DropDownField = ({
  label,
  onChange,
  choices,
  id,
  t,
  tReady,
  ...rest
}) => {
  return (
    <FormControl>
      <InputLabel htmlFor={id}>{t(label)}</InputLabel>
      <Select onChange={e => onChange(e.target.value)} id={id} {...rest}>
        {choices.map(p => (
          <MenuItem value={p.key} key={p.key}>
            {t(p.name || p.key)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default translate()(DropDownField);
