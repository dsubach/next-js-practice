import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import styles from "./Loader.module.css";
import rickImageSrc from "/public/loader.png";

const Loader = ({ width = "90" }: { width?: string }) => {
  return (
    <Box display="flex" justifyContent="center">
      <Box width={width}>
        <Box className={styles.rotate}>
          <Image src={rickImageSrc.src} width={50} height={90} alt="loader" />
        </Box>
      </Box>
    </Box>
  );
};

export default Loader;
