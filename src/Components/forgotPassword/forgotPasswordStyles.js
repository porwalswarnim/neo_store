import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  registerBoxGrid: {
    margin: "auto",
    marginTop: "120px",
    width: "50%",
    padding: "10px",
    backgroundColor: "#f9f9f9",
  },
  registerInputCSS: {
    width: "100%",
    margin: "15px",
    "& input::placeholder": {
      fontSize: "20px",
      fontWeight: "bolder",
    },
  },
  recoverHeading: {
    padding: "10px",
    textAlign: "center",
    fontWeight: "bold",
    borderBottom: "1px solid #d8cbcb",
  },
  verificationLine: {
    marginTop: "20px",
    textAlign: "center",
    color: "red",
  },
}));
