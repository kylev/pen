// eslint-disable-next-line no-unused-vars
import React from "react";
import { observer } from "mobx-react";
import { translate } from "react-i18next";

const DocTitle = ({ store, t }) => {
  document.title = t("title") + " | " + t(store.ratio);
  return null;
};

export default translate()(observer(DocTitle));
