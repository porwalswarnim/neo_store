import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    marginTop: "40px",
  },
  media: {
    height: 200,
    margin: 10,
  },
  cartButton: {
    padding: "10px 20px",
    fontSize: "20px",
    fontWeight: "bold",
  },
  FurnitureName: {
    textAlign: "center",
    fontWeight: "bold",
    height:'60px',
    fontSize: "30px",
    color: "#078fbb",
  },
  FurnitureAmountName: {
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "10px",
    fontSize: "30px",
  },
  buttonAdd: {
    justifyContent: "center",
    marginTop: "0px",
  },
}));
