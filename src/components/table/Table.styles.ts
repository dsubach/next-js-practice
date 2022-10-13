import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    tableRow: {
      transition: "background-color 0.2s",
      "&:hover": {
        cursor: "pointer !important",
        backgroundColor: "rgb(250, 250, 250)",
      },
    },
  })
);

export default useStyles;
