import React from "react";
import { observer } from "mobx-react";

import DropDownField from "./DropDownField";

const ColorDropDownField = ({ choices, ...rest }) => {
  return (
    <DropDownField
      choices={choices.map(
        c => (c.name ? c : { ...c, name: `colors.${c.key}` })
      )}
      {...rest}
    />
  );
};

export default observer(ColorDropDownField);
