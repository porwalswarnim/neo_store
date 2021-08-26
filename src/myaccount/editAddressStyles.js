import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    MainGrid: {
        borderTop: "1px solid #71606026",
        marginTop: "30px",
      },
      RightSideBarCSS: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      registerBoxGrid: {
        margin: "auto",
        marginTop: "10px",
        width: "70%",
        padding: "10px",
        backgroundColor: "#f9f9f9",
      },
    
      saveButton: {
        margin: "20px 0px 0px 40px",
        fontSize: "20px",
        border: "1px solid #71606026",
      },
      CancelButton: {
        margin: "20px 0px 0px 20px",
        fontSize: "20px",
        border: "1px solid #71606026",
      },
      addressInputCSS: {
        marginTop: "30px",
        marginLeft: "30px",
        backgroundColor: "white",
        width: "50%",
      },
      pincodeInputCSS: {
        marginTop: "10px",
        marginLeft: "30px",
        backgroundColor: "white",
      
        width: "30%",
      },
      cityInputCSS: {
        marginTop: "25px",
        marginLeft: "30px",
        backgroundColor: "white",
        width: "30%",
      },
      stateInputCSS: {
        marginTop: "25px",
        marginLeft: "30px",
        backgroundColor: "white",
        width: "30%",
      },
      countryInputCSS: {
        marginTop: "25px",
        marginLeft: "30px",
        backgroundColor: "white",
        width: "30%",
      },
}));
