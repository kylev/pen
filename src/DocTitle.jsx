// eslint-disable-next-line no-unused-vars
import React from "react";

import { useTranslation } from "react-i18next";

const DocTitle = ({ store }) => {
  const { t } = useTranslation();

  document.title = t("title") + " | " + t(store.ratio);
  return null;
};

export default DocTitle;
