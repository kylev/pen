import React from "react";
import { withTranslation } from "react-i18next";

import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

const MillimeterField = props => {
  const {
    onChange,
    label,
    max,
    min,
    step,
    t,
    tReady,
    ...other
  } = props;

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
      InputLabelProps={{}}
    />
  );
};

const styles = theme => {
  return {
    label: { whiteSpace: "nowrap" }
  };
};

export default withTranslation()(MillimeterField);
