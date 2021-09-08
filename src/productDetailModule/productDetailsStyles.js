import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: "40px",
    width: "100%",
  },
  leftProductDetailGrid: {
    textAlign: "center",
    width: "100%",
  },
  rightProductDetailGrid: {
    marginLeft: "50px",
  },
  image: {
    margin: "20px 10px",
    height: "50vh",
  },
  smallImage: {
    backgroundColor: "white",
    marginTop: "10px",
    height: "20vh",
    width: "100%",
  },
  footerDescriptionCSS: {
    marginLeft: "40px",
    marginTop: "40px",
  },
  furnitureNameCSS: {
    fontSize: "40px",
    fontWeight: "500",
    marginTop: "70px",
    color: "#252627",
  },
  ratingCSS: {
    fontSize: "30px",
    marginTop: "10px",
    padding: "0px",
  },
  hrCSS: {
    marginTop: "30px",
    marginRight: "50px",
  },
  priceCSS: {
    marginTop: "20px",
    fontSize: "30px",
  },
  priceAmountCSS: {
    marginLeft: "30px",
    fontWeight: "bold",
    color: "green",
  },
  addtoCartCSS: {
    backgroundColor: "#1ab7ea",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
  },
  rateProductCSS: {
    backgroundColor: "#c3681a",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    marginLeft: "20px",
  },
}));
