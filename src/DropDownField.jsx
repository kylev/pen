import React from "react";
import { translate } from "react-i18next";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";

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
          <MenuItem value={p.value || p.key} key={p.key}>
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
