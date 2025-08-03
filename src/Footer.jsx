import { Grid, Typography } from "@mui/material";
import { GitHub, Twitter } from "@mui/icons-material";

import LanguageSelect from "./LanguageSelect";

const Footer = () => {
  return (
    <Grid container marginY={2}>
      <Grid size={1} />
      <Grid size={7}>
        Created with <a href="https://reactjs.org/">React</a>
        {" and "}
        <a href="https://mobx.js.org">Mobx</a> while thinking about my mom, a teacher.
        <br />
        <a href="https://github.com/kylev/pen/issues">Bugs? Suggestions?</a>
        <br />
        <a href="https://github.com/kylev/pen">
          <GitHub />
        </a>
        &nbsp;
        <a href="https://twitter.com/kylev">
          <Twitter />
        </a>
      </Grid>
      <Grid size={3} style={{ textAlign: "right" }}>
        <LanguageSelect />
      </Grid>
      <Grid size={1} />
    </Grid>
  );
};

export default Footer;
