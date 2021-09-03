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
      registerBoxGrid: {
        margin: "auto",
        marginTop: "60px",
        width: "60%",
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
}));
