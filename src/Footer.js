import React from "react";

import { Typography } from "material-ui";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import githubIcon from "@fortawesome/fontawesome-free-brands/faGithub";
import twitterIcon from "@fortawesome/fontawesome-free-brands/faTwitter";

import LanguageSelect from "./LanguageSelect";

const Footer = ({ classes }) => {
  return (
    <Grid container spacing={16} className={classes.root}>
      <Grid item xs={1} />
      <Grid item xs={7}>
        <Typography paragraph align="right">
          <a href="https://github.com/kylev/pen" padding={24}>
            <FontAwesomeIcon icon={githubIcon} className={classes.icon} />
          </a>
          <a href="https://twitter.com/kylev">
            <FontAwesomeIcon icon={twitterIcon} className={classes.icon} />
          </a>
          Kyle V ©2018 Created with <a href="https://reactjs.org/">React</a>
          {" and "}
          <a href="https://mobx.js.org">Mobx</a> while thinking about my mom, a
          teacher.<br />
          <a href="https://github.com/kylev/pen/issues">Bugs? Suggestions?</a>
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <LanguageSelect />
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

const styles = theme => {
  return {
    root: { backgroundColor: theme.palette.background.default },
    icon: { paddingRight: theme.spacing.unit, paddingLeft: theme.spacing.unit }
  };
};

export default withStyles(styles)(Footer);
