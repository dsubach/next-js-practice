import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import rickImageSrc from "./../../../public/rick_and_morty.png";
import styles from "./Rick.module.css";

const Rick = () => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <Box className={styles.rotate}>
        <Image src={rickImageSrc.src} width={500} height={700} alt="snow" />
      </Box>
    </Box>
  );
};

export default Rick;
