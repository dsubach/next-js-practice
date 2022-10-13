import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import wentWrongImage from "/public/something-went-wrong.gif";

const SomethingWrong = () => {
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
        Something went wrong
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
        src={wentWrongImage.src}
        width={450}
        height={520}
        alt="wentWrong"
        layout="fixed"
      />
    </Container>
  );
};

export default SomethingWrong;
