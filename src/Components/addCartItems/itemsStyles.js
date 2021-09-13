import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  imgCSS: {
    backgroundColor: "white",
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: "10px 20px",
    height: "80%",
  },
  MainGridItems: {
    width: "100%",
    height: "100px",
    backgroundColor: "#f9f9f9",
  },
  iconMinusCSS: {
    fontSize: "40px",
    color: "red",
  },
  iconPlusCSS: {
    fontSize: "40px",
    color: "red",
  },
  priceCSS: {
    display: "flex",
    alignItems: "center",
    fontSize: "25px",
  },
  totalAmountCSS: {
    display: "flex",
    alignItems: "center",
  },
  totalTypoCSS: {
    fontSize: "25px",
    marginLeft: "10px",
  },
  iconGridCSS: {
    display: "flex",
    alignItems: "center",
  },
  plusMinusBoxCSS: {
    fontSize: "20px",
    height: "30px",
    width: "50px",
    textAlign: "center",
  },
}));
