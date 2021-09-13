import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    mainLoginPageCSS:{
        marginTop:'120px',
    },
    leftpaper: {
        margin: theme.spacing(8, 4),
        marginTop:'60px',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      paper: {
        margin: theme.spacing(8, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
    
      avatar: {
        margin: theme.spacing(1),
        marginLeft:'120px',
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: "100%",
        marginTop: theme.spacing(1),
      },
      submitButton: {
        marginTop: "40px",
        width: "600px",
      },
      searchBox: {
        display: "flex",
        alignItems: "center",
        width: 300,
        marginLeft: "150px",
      },
      image: {
        backgroundImage: "url(/furnitureimage.jpg)",
        backgroundColor: "white",
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
      LoginEmailCSS: {
        width: "600px",
        marginTop: "25px",
        "& input::placeholder": {
          paddingTop: "40px",
          fontSize: "20px",
          fontWeight: "bolder",
        },
      },
}));
