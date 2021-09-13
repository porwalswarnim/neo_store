import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: "80px",
  },
  leftSideGrid: {
    marginLeft: "30px",
    backgroundColor: "#f9f9f9",
  },
  rightSideGrid: {
    marginLeft: "60px",
  },
  buttonInvoiceDownload: {
    margin: "20px 0px 10px 15px",
    fontWeight: "bold",
    width: "95%",
  },
  addAddressCSS: {
    margin: "10px 0px 0px 0px",
    fontWeight: "bold",
  },
}));
