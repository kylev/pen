import React from "react";
import download from "downloadjs";
import { withTranslation } from "react-i18next";

import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";

import { outputAttempt } from "./ga";

const doPrintWindow = e => {
  outputAttempt("popout");
  const svg = document.getElementById("theSVG");

  const printWindow = window.open("", "printwindow", "status=1");
  printWindow.document.write(`
    <html>
      <body style="margin: 0; padding: 0;">${svg.outerHTML}</body>
    </html>
  `);
};

const doSaving = e => {
  outputAttempt("save");
  const svg = document.getElementById("theSVG");

  download(svg.outerHTML, `pen-output.svg`, "image/svg");
};

const doPrint = e => {
  outputAttempt("print");
  window.print();
};

const HeaderButtons = ({ t }) => {
  return (
    <div>
      <IconButton
        onClick={doSaving}
        color="inherit"
        title={t("buttonNames.download")}
      >
        <Icon>file_download</Icon>
      </IconButton>
      <IconButton
        onClick={doPrintWindow}
        color="inherit"
        title={t("buttonNames.popout")}
      >
        <Icon>input</Icon>
      </IconButton>
      <IconButton
        onClick={doPrint}
        color="inherit"
        title={t("buttonNames.print")}
      >
        <Icon>print</Icon>
      </IconButton>
    </div>
  );
};

export default withTranslation()(HeaderButtons);
