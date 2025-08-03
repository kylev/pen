import { useTranslation } from "react-i18next";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const tName = (t, p) => {
  if (!p.name) return t(p.key);
  if (typeof p.name === "string") return t(p.name);
  else return t(p.name[0], p.name[1]);
};

const DropDownField = ({ label, onChange, choices, id, ...rest }) => {
  const { t } = useTranslation();

  return (
    <FormControl>
      <InputLabel id={`label-${id}`} sx={{ whiteSpace: "nowrap" }}>
        {t(label)}
      </InputLabel>
      <Select
        onChange={(e) => onChange(e.target.value)}
        id={id}
        label={t(label)}
        labelId={`label-${id}`}
        {...rest}
      >
        {choices.map((p) => (
          <MenuItem value={p.value || p.key} key={p.key}>
            {tName(t, p)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDownField;
