import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  footer: {
    bottom: "0px",
    backgroundColor: "black",
    width: "100%",
    marginTop: "5rem",
    padding: "1rem",
  },
  buttonSubscribe: {
    backgroundColor: "white",
    borderRadius: "5px",
    fontSize: "1rem",
    fontWeight: "bold",
    width: "130px",
  },
  emailInput: {
    backgroundColor: "white",
    padding: "5px",
    borderRadius: "5px",
    borderBottom: "0",
    paddingBottom: "0",
    marginTop: "15px",
  },
  copyRightText: {
    fontSize: "1.4rem",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "40px",
  },
  headingFooter: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    margin:'0px 0px 25px 0px',
  },
  footerTypography: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginTop:'10px'
  },
}));
