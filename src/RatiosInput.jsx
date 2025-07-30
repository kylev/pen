import React from "react";

import { clamp } from "lodash";
import { useTranslation } from "react-i18next";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

const labels = ["ascender", "xheight", "descender", "gap"];

function RatiosInput({ store }) {
  const { t } = useTranslation();

  return (
    <Box sx={{ display: 'flex', flexWrap: 'nowrap' }}>
      <FormControl onClick={() => console.log("flerp")}>
        <InputLabel shrink>{t("ratios")}</InputLabel>
      </FormControl>
      <span>
        {store.ratios.map((r, i) => (
          <span key={i} style={{ display: "inline-block", marginRight: 8 }}>
            <Input
              type="number"
              value={r}
              disabled={store.ratio !== "custom"}
              onChange={e => store.setRatio(i, e.target.value)}
              style={{ marginTop: 16, width: 60 }}
            />
            <br />
            <FormHelperText>{t(labels[i])}</FormHelperText>
          </span>
        ))}
      </span>
    </Box>
  );
};

export default RatiosInput;
