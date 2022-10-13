import { Box, Typography } from "@mui/material";
import Rick from "components/rick/Rick";
import React from "react";

const SuperAdmin = () => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        height: "calc(100vh - 64px)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "calc(100% - 64px)",
        }}
      >
        <Typography color="#fff" variant="h3" sx={{ display: "inline-block" }}>
          Super admin is here, no way!
        </Typography>
      </Box>

      <Rick />
    </Box>
  );
};

export default SuperAdmin;
