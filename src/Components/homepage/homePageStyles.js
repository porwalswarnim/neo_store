import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  HomeBoxGrid: {
    width: "100%",
    marginTop: "50px",
  },
  registerBoxGrid: {
    margin: "auto",
    marginTop: "30px",
  },
  image: {
    // backgroundImage: "url(/homelandscapeimage.jpg)",
    // backgroundColor: "white",
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    // objectFit: "cover",
    //     width: "50%",
    //     height: "50vh",
    // alignItems:'right',
    height: 0,
    paddingTop: "30.25%", // 16:9
  },
  heading: {
    marginTop: "20px",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "40px",
  },
  viewAllCSS: {
    marginTop: "10px",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "20px",
  },
}));
