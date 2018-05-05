import React from "react";

import DropDownField from "./DropDownField";

const dashes = [
  { key: "none", name: "Solid" },
  { key: "1, 1", name: "1cm" },
  { key: "2, 2", name: "2cm" },
  { key: "4, 2", name: "4cm / 2cm" }
];

const DashDropDownField = props => {
  return <DropDownField choices={dashes} {...props} />;
};

export default DashDropDownField;
