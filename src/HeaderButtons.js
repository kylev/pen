import React from "react";

import Icon from "material-ui/Icon";
import IconButton from "material-ui/IconButton";

const HeaderButtons = () => {
  return (
    <div>
      <IconButton onClick={() => window.print()} color="inherit">
        <Icon>file_download</Icon>
      </IconButton>
      <IconButton onClick={() => window.print()} color="inherit">
        <Icon>input</Icon>
      </IconButton>
      <IconButton onClick={() => window.print()} color="inherit">
        <Icon>print</Icon>
      </IconButton>
    </div>
  );
};

export default HeaderButtons;
