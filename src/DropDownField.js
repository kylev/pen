import React from "react";
import { translate } from "react-i18next";

import { withStyles } from "material-ui/styles";
import { FormControl } from "material-ui/Form";
import { InputLabel } from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import Select from "material-ui/Select";

const tName = (t, p) => {
  if (!p.name) return t(p.key);
  if (typeof p.name === "string") return t(p.name);
  else return t(p.name[0], p.name[1]);
};

const DropDownField = ({
  classes,
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
      <InputLabel className={classes.label} htmlFor={id}>
        {t(label)}
      </InputLabel>
      <Select onChange={e => onChange(e.target.value)} id={id} {...rest}>
        {choices.map(p => (
          <MenuItem value={p.key} key={p.key}>
            {tName(t, p)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const styles = theme => {
  return {
    label: { whiteSpace: "nowrap" }
  };
};

export default translate()(withStyles(styles)(DropDownField));
