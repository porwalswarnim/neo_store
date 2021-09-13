import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  headerFeedback: {
    backgroundColor: "black",
  },
  btn: {
    backgroundColor: "black",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
  },
  searchBox: {
    width: 300,
  },
  inputSearchBox: {
    marginLeft: theme.spacing(1),
    flex: 1,
    "& input::placeholder": {
      fontSize: "20px",
      fontWeight: "bolder",
    },
  },
  cartBox: {
    padding:'0 2rem',
    backgroundColor: "white",
    fontSize: "20px",
   
  },
  companyName: {
    fontSize: "35px",
    fontWeight: "bold",
  },
}));
