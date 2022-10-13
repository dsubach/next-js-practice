import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import superAdminImage from "./../../../public/superadmin.gif";

const Admin = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" sx={{ color: "#fff", fontWeight: "bold" }}>
        Welcome, admin!
      </Typography>

      <Box borderRadius={5} overflow="hidden">
        <Image
          src={superAdminImage.src}
          width={400}
          height={550}
          alt="superAdmin"
          layout="fixed"
        />
      </Box>
    </Container>
  );
};

export default Admin;
