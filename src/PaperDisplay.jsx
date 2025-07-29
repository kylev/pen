import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

import PracticePage from "./PracticePage";

const PaperDisplay = ({ store }) => {
  return (
    <Container sx={{ marginY: 2 }}>
      <Box justifyContent={"center"} display="flex">
        <Paper sx={{
          padding: 2,
          overflow: "hidden",
          width: store.dimensions.width + "mm",
          display: 'inline-block'
        }}>
          <PracticePage store={store} />
        </Paper>
      </Box>
    </Container>
  );
};

export default PaperDisplay;
