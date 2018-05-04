import React from "react";
import { translate } from "react-i18next";

import { InputAdornment } from "material-ui/Input";
import TextField from "material-ui/TextField";

const MillimeterField = props => {
  const { onChange, label, max, min, step, t, tReady, ...other } = props;

  return (
    <TextField
      {...other}
      label={t(label)}
      onChange={e => onChange(e.target.value)}
      type="number"
      inputProps={{
        max,
        min,
        step,
        style: { width: 80 }
      }}
      // eslint-disable-next-line react/jsx-no-duplicate-props
      InputProps={{
        endAdornment: <InputAdornment position="end">mm</InputAdornment>
      }}
    />
  );
};

export default translate()(MillimeterField);
