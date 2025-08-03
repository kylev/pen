import DropDownField from "./DropDownField";

const dashes = [
  { key: "none", value: "none" },
  { key: "1cm", value: "1, 1" },
  { key: "2cm", value: "2, 2" },
  { key: "42vary", value: "4, 2" },
].map((c) => (c.name ? c : { ...c, name: `dashNames.${c.key}` }));

const DashDropDownField = (props) => {
  return <DropDownField choices={dashes} {...props} />;
};

export default DashDropDownField;
