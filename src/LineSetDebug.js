import React from "react";
import { observer } from "mobx-react";

import Grid from "material-ui/Grid";

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
      <div>Line: {line.key}</div>

      {showFields.map(key => (
        <div key={key}>
          <div>{key}</div>
          <div>{line[key]}</div>
        </div>
      ))}
    </Grid>
  );
};

const LineSetDebug = ({ lineSet }) => {
  return (
    <Grid container>{lineSet.map(l => <LineItem key={l.key} line={l} />)}</Grid>
  );
};

export default observer(LineSetDebug);
