import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: "80px",
  },
  registerBoxGrid: {
    margin: "auto",
    marginTop: "50px",
    width: "70%",
    padding: "10px",
    backgroundColor: "#e2cdcd26",
  },
  registerInputCSS: {
    width: "100%",
    margin: "12px",
    "& input::placeholder": {
      fontSize: "20px",
      fontWeight: "bolder",
    },
  },

  facebookCSS: {
    marginLeft: "420px",
  },
  GoogleCSS: {
    marginLeft: "50px",
    marginTop:'22px',
    // padding:'2px'
  },
  submitButton:{
    margin: "15px",
     fontSize: "20px",
  },
}));

