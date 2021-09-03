import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    MainGrid: {
        borderTop: "1px solid #71606026",
        marginTop:'10px',
      },
      RightSideBarCSS: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      registerBoxGrid: {
        margin: "auto",
        marginTop: "10px",
        width: "60%",
        padding: "10px",
        backgroundColor: "#f9f9f9",
      },
    
      labelName: {
        fontSize: "20px",
        fontWeight: "bold",
        margin: "45px 0px 0px 20px",
      },
      editButton: {
        margin: "30px 0px 0px 40px",
        fontSize: "20px",
        border: "1px solid #71606026",
      },
      saveButton: {
        margin: "30px 0px 0px 40px",
        fontSize: "20px",
        border: "1px solid #71606026",
      },
      inputFieldProfile:{
       width:'80%',
       marginTop:'22px',
      },
      
}));
