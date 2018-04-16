import React from "react";

import NumberFormat from "react-number-format";
import TextField from "material-ui/TextField";
// import { InputAdornment } from "material-ui/Input";

const TextFieldMM = props => {
  return (
    <TextField
      {...props}
      InputProps={{
        inputComponent: NumberFormatMM
        //endAdornment: <InputAdornment position="end">mm</InputAdornment>
      }}
    />
  );
};

const NumberFormatMM = props => {
  const { onChange, inputRef, ...other } = props;

  return (
    <NumberFormat
      {...other}
      ref={inputRef}
      suffix={"mm"}
      decimalScale={1}
      fixedDecimalScale={true}
      onValueChange={v => onChange(v.floatValue)}
    />
  );
};

const MillimeterField = props => {
  return <TextFieldMM {...props} />;
};

export default MillimeterField;
