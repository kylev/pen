import React from "react";
import { range } from "lodash";
import { observer } from "mobx-react";
import Color from "color";

import DropDownField from "./DropDownField";

const colors = [
  { key: "transparent" },
  { key: "black" },
  { key: "gray" },
  ...range(1, 10).map(v => ({
    key: Color.rgb(255, 255, 255)
      .darken(v / 10.0)
      .string(),
    name: `Gray ${v * 10}%`
  })),
  { key: "blue" },
  { key: "cyan" },
  { key: "darkgray" },
  { key: "green" },
  { key: "lightgray" },
  { key: Color.rgb(164, 221, 237).string(), name: "Non-Photo Blue" },
  { key: "pink" },
  { key: "red" },
  { key: "white" },
  { key: "yellow" }
].map(c => (c.name ? c : { ...c, name: `colors.${c.key}` }));

const ColorDropDownField = props => {
  return <DropDownField choices={colors} {...props} />;
};

export default observer(ColorDropDownField);
