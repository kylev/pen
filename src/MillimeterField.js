import React from "react";

import NumberFormat from "react-number-format";
import TextField from "material-ui/TextField";

const TextFieldMM = props => {
  return (
    <TextField
      {...props}
      InputProps={{
        inputComponent: NumberFormatMM
      }}
    />
  );
};

const NumberFormatMM = props => {
  const { onChange, inputRef, type, ...other } = props;

  return (
    <NumberFormat
      {...other}
      ref={inputRef}
      suffix={"mm"}
      decimalScale={1}
      fixedDecimalScale={true}
      onValueChange={v => onChange(v.floatValue || v.formattedValue)}
    />
  );
};

const MillimeterField = props => {
  return <TextFieldMM {...props} />;
};

export default MillimeterField;
