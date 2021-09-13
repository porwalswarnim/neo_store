import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    mainGrid:{
        marginTop: "30px",
         border: "1px solid #e2cdcd26", 
    },
    leftProductGrid: {
        textAlign: "center",
      },
      rightProductGrid: {
        textAlign: "center",
      },
      boxCSS: {
        borderRadius: "5px",
        marginTop: "30px",
        marginLeft: "45px",
        width: "300px",
        padding: "10px",
        fontSize: "30px",
        borderColor: "transparent",
        cursor:'pointer',
      },
      treeItemCSS: {
        width: "260px",
        marginTop: "10px",
        padding: "10px",
        border: "1px solid #71606026",
      },
      categoryCSS: {
        borderRadius: "5px",
        width: "300px",
      },
      label: {
        fontSize: "30px",
      },
}));
