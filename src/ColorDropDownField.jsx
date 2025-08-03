import { range } from "lodash-es";
import Color from "color";

import DropDownField from "./DropDownField";

const colors = [
  { key: "transparent" },
  { key: "black" },
  { key: "gray" },
  ...range(1, 10).map((v) => ({
    key: Color.rgb(255, 255, 255)
      .darken(v / 10.0)
      .string(),
    name: ["colorNames.graypct", { pct: v * 10 }],
  })),
  { key: "blue" },
  { key: Color.rgb(164, 221, 237).string(), name: "colorNames.nonphotoblue" },
  { key: "cyan" },
  { key: "darkgray" },
  { key: "green" },
  { key: "lightgray" },
  { key: "pink" },
  { key: "red" },
  { key: "white" },
  { key: "yellow" },
].map((c) => (c.name ? c : { ...c, name: `colorNames.${c.key}` }));

const ColorDropDownField = (props) => {
  return <DropDownField choices={colors} {...props} />;
};

export default ColorDropDownField;
