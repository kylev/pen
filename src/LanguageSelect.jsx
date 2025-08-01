import { useTranslation } from "react-i18next";

import DropDownField from "./DropDownField";

const LanguageSelect = () => {
  const { i18n } = useTranslation();

  return (
    <DropDownField
      id="lang-select"
      label={"selectlanguage"}
      margin="dense"
      value={i18n.resolvedLanguage}
      onChange={v => i18n.changeLanguage(v)}
      choices={[
        { key: "de", name: "languages.de" },
        { key: "en", name: "languages.en" },
        { key: "en-GB", name: "languages.en-GB" },
        { key: "es", name: "languages.es" },
        { key: "tr", name: "languages.tr" },
      ]}
    />
  );
};

export default LanguageSelect;
