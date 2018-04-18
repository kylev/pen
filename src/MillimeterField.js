import React from "react";

import { InputAdornment } from "material-ui/Input";
import TextField from "material-ui/TextField";

const MillimeterField = props => {
  const { onChange, max, min, step, ...other } = props;

  return (
    <TextField
      {...other}
      onChange={e => onChange(e.target.value)}
      type="number"
      inputProps={{
        max,
        min,
        step
      }}
      InputProps={{
        endAdornment: <InputAdornment position="end">mm</InputAdornment>
      }}
    />
  );
};

export default MillimeterField;
