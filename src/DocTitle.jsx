// eslint-disable-next-line no-unused-vars
import React from "react";

import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";

const DocTitle = ({ store }) => {
  const { t } = useTranslation();

  document.title = t("title") + " | " + t(store.ratio);
  return null;
};

const MobxDocTitle = observer(DocTitle);
export default MobxDocTitle;
