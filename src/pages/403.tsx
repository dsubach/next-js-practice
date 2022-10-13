import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import forbiddenImage from "./../../public/forbidden.gif";

const NoAccess = () => {
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
        You are not allowed to visit this page
      </Typography>
      <Box sx={{ color: "#fff" }} mb={1}>
        <Link href="/">
          <a>
            <ArrowBackIcon />
            Back to main page
          </a>
        </Link>
      </Box>
      <Box borderRadius={5} overflow="hidden">
        <Image
          src={forbiddenImage.src}
          width={600}
          height={520}
          alt="forbidden"
        />
      </Box>
    </Container>
  );
};

export default NoAccess;
