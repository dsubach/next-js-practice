import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "center",
    },
    wrapper: {
      width: 500,
      minHeight: 300,
      backgroundColor: "#fff",
      borderRadius: 5,
      display: "flex",
      flexDirection: "column",
      padding: 30,
    },
    avatarWrapper: {
      display: "flex",
      justifyContent: "center",
    },
    mainInfo: {
      padding: "0 20px",
      marginBottom: 20,
      display: "flex",
      justifyContent: "space-between",
    },
    title: { fontWeight: 600 },
    back: {
      display: "flex",
      alignItems: "center",
    },
  })
);

export default useStyles;
