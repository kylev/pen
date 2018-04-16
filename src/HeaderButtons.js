import React from "react";
import download from "downloadjs";

import Icon from "material-ui/Icon";
import IconButton from "material-ui/IconButton";

const doPrintWindow = e => {
  const svg = document.getElementById("theSVG");

  const printWindow = window.open("", "printwindow", "status=1");
  printWindow.document.write(`
    <html>
      <body style="margin: 0; padding: 0;">${svg.outerHTML}</body>
    </html>
  `);
};

const doSaving = store => {
  const svg = document.getElementById("theSVG");

  download(
    svg.outerHTML,
    `pen-${store.ratio} ${store.pageSize}-${store.orientation}.svg`,
    "image/svg"
  );
};

const HeaderButtons = () => {
  return (
    <div>
      <IconButton onClick={doSaving} color="inherit">
        <Icon>file_download</Icon>
      </IconButton>
      <IconButton onClick={doPrintWindow} color="inherit">
        <Icon>input</Icon>
      </IconButton>
      <IconButton onClick={() => window.print()} color="inherit">
        <Icon>print</Icon>
      </IconButton>
    </div>
  );
};

export default HeaderButtons;
