import React from "react";

import { Typography } from "material-ui";
import Grid from "material-ui/Grid";
import Icon from "material-ui/Icon";

const Footer = () => {
  return (
    <Grid container justify="center" spacing={24}>
      <Grid item xs={8}>
        <Typography align="center">
          <a href="https://github.com/kylev/pen">
            <Icon>github</Icon>
          </a>
          <a href="https://twitter.com/kylev">
            <Icon>twitter</Icon>
          </a>
          Kyle V ©2018 Created with <a href="https://reactjs.org/">React</a>
          {" and "}
          <a href="https://mobx.js.org">Mobx</a> while thinking about my mom, a
          teacher.<br />
          <a href="https://github.com/kylev/pen/issues">Bugs? Suggestions?</a>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
