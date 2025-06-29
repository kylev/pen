import React from "react";
import { observer } from "mobx-react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const showFields = [
  "x1",
  "y1",
  "x2",
  "y2",
  "stroke",
  "strokeDasharray",
  "strokeWidth"
];

const LineItem = ({ line }) => {
  return (
    <Grid item xs={3}>
      <Card>
        <CardContent>
          <Typography variant="headline">{line.key}</Typography>
          <Typography>
            {showFields.map(key => (
              <span key={key}>
                {key}: {line[key]}
                <br />
              </span>
            ))}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

const LineSetDebug = ({ lineSet }) => {
  return (
    <Grid container>{lineSet.map(l => <LineItem key={l.key} line={l} />)}</Grid>
  );
};

export default observer(LineSetDebug);
