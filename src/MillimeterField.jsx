import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";

function MillimeterField(props) {
  const { t } = useTranslation();

  const {
    onChange,
    label,
    max,
    min,
    step,
    ...other
  } = props;

  return (
    <TextField
      {...other}
      label={t(label)}
      onChange={e => onChange(e.target.value)}
      type="number"
      slotProps={{
        htmlInput: {
          max,
          min,
          step,
          style: { width: 80 }
        },
        input: {
          endAdornment: <InputAdornment position="end">mm</InputAdornment>,
        },
      }}
    />
  );
};


export default MillimeterField;
