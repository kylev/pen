import React from "react";

import { Typography } from "material-ui";
import Icon from "material-ui/Icon";

const Footer = () => {
  return (
    <Typography>
      <a href="https://github.com/kylev/pen">
        <Icon>github</Icon>
      </a>
      <a href="https://twitter.com/kylev">
        <Icon>twitter</Icon>
      </a>
      Kyle V ©2018 Created with <a href="https://ant.design/">Ant Design</a>,{" "}
      <a href="https://reactjs.org/">React</a>
      {" and "}
      <a href="https://mobx.js.org">Mobx</a> while thinking about my mom, a
      teacher.{" "}
      <a href="https://github.com/kylev/pen/issues">Bugs? Suggestions?</a>
    </Typography>
  );
};

export default Footer;
