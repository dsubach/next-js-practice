import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import norFoundImage from "/public/not-found.png";

const NotFound = () => {
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
        Page not found
      </Typography>
      <Box sx={{ color: "#fff" }}>
        <Link href="/">
          <a>
            <ArrowBackIcon />
            Back to main page
          </a>
        </Link>
      </Box>
      <Image
        src={norFoundImage.src}
        width={350}
        height={520}
        alt="notFound"
        layout="fixed"
      />
    </Container>
  );
};

export default NotFound;
