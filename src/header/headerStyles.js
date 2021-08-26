import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    headerFeedback: {
        backgroundColor: "black",
      },
      title: {
        color: "black",
        paddingLeft: "15px",
        fontWeight: "bold",
        fontSize: "25px",
      },
      buttonHome: {
        marginLeft: "410px",
        backgroundColor: "black",
        color: "white",
        fontSize: "16px",
        fontWeight: "bold",
      },
      buttonProducts: {
        marginLeft: "60px",
        backgroundColor: "black",
        color: "white",
        fontSize: "16px",
        fontWeight: "bold",
      },
      buttonOrders: {
        marginLeft: "60px",
        backgroundColor: "black",
        color: "white",
        fontSize: "16px",
        fontWeight: "bold",
      },
    
      searchBox: {
        display: "flex",
        alignItems: "center",
        width: 300,
        marginLeft: "80px",
      },
    
      inputSearchBox: {
        marginLeft: theme.spacing(1),
        flex: 1,
        "& input::placeholder": {
          paddingTop: "40px",
          fontSize: "20px",
          fontWeight: "bolder",
        },
      },
      cartBox: {
        marginLeft: "10px",
        backgroundColor: "white",
        fontSize: "20px",
      },
      companyName:{ 
          fontSize: "35px",
           fontWeight: "bold"
         },
         avatarCSS:{
           backgroundColor:'red',
           color:'white',
           fontSize:'30px',
          marginLeft:'5px',
         }
}));
