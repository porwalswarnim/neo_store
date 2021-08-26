import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    HomeBoxGrid: {
        width: "100%",
        marginTop:"100px"
      },
      registerBoxGrid: {
        margin: "auto",
        marginTop: "30px",
      },
      image: {
        backgroundImage: "url(/homelandscapeimage.jpg)",
        backgroundColor: "white",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        width: "100%",
        height: "50vh",
      },
      heading:{
        marginTop: "40px",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "40px",
      },
      viewAllCSS:{
        marginTop: "10px",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "20px",
      },
}));
