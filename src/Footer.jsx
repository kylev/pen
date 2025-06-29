import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

import LanguageSelect from "./LanguageSelect";

const Footer = ({ }) => {
  return (
    <Grid container spacing={16}>
      <Grid item xs={1} />
      <Grid item xs={7}>
        <Typography paragraph align="right">
          <a href="https://github.com/kylev/pen" padding={24}>
            <FontAwesomeIcon icon={faGithub}  />
          </a>
          <a href="https://twitter.com/kylev">
            <FontAwesomeIcon icon={faTwitter} />
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

export default Footer;
