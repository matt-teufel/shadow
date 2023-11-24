import React from "react";
import { Typography, Box } from "@mui/material";

export function GameOver() {
  return (
    <Box sx={{ bgcolor: "#121212", color: "white" }}>
      <Typography variant="h1">
        Congragulations, You Win! Bask in the glory of success
      </Typography>
    </Box>
  );
}
