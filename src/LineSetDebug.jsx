import React from "react";

import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

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
    <Grid size={{ xs: 3 }}>
      <Card>
        <CardContent>
          <Typography variant="h6">{line.key}</Typography>
          <Typography>
            {showFields.map(key => (
              <span key={`debugline-${line.key}-${key}`}>
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

const LineSetDebug = ({ hidden, role, lineSet }) => {
  return (
    <Box hidden={hidden} role={role}>
      <Grid container>{lineSet.map(({ key, ...l }) => <LineItem key={key} line={l} />)}</Grid>
    </Box>
  );
};

export default LineSetDebug;
