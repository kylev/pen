import React from "react";
import i18next from "i18next";
import { translate } from "react-i18next";

import DropDownField from "./DropDownField";

const LanguageSelect = ({ t }) => {
  return (
    <DropDownField
      id="lang-select"
      label={"selectlanguage"}
      margin="dense"
      value={i18next.language}
      onChange={v => i18next.changeLanguage(v)}
      choices={[
        { key: "en", name: "languages.en" },
        { key: "en-GB", name: "languages.en-GB" },
        { key: "en-US", name: "languages.en-US" },
        { key: "es-LA", name: "languages.es" }
      ]}
    />
  );
};

export default translate()(LanguageSelect);
