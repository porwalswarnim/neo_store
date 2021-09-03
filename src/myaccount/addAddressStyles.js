import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  MainGrid: {
    borderTop: "1px solid #71606026",
    marginTop: "10px",
  },
  RightSideBarCSS: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  boxCSS: {
    borderRadius: "5px",
    marginTop: "30px",
    marginLeft: "45px",
    width: "90%",
    padding: "10px",
    fontSize: "30px",
    borderColor: "transparent",
  },
  addressTypography: {
    margin: "0px 0px 0px 10px",
    fontSize: "20px",
  },
  EditButtonCSS: {
    margin: "30px 0px 5px 15px",
    fontWeight: "bold",
  },
  closeIconCSS: {
    fontSize: "40px",
    backgroundColor: "#d82222",
    color: "white",
    borderRadius: "8px",
  },
  addAddressCSS: {
    margin: "40px 0px 10px 50px",
    fontWeight: "bold",
  },
}));
