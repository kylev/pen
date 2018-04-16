import React from "react";
import { FormControl } from "material-ui/Form";
import { InputLabel } from "material-ui/Input";
import Grid from "material-ui/Grid";

const ColFormItem = ({ label, children, ...rest }) => {
  return (
    <Grid item {...rest}>
      <FormControl>
        <InputLabel>{label}</InputLabel>
        {children}
      </FormControl>
    </Grid>
  );
};

export default ColFormItem;
