import Grid from "@material-ui/core/Grid";
import FacebookLoginButton from "./FacebookLogin";
import GoogleLoginButton from "./GoogleLogin";
import TwitterLoginButton from "./TwitterLogin";
import { useStyles } from "./loginPageStyles";

const LeftSideLogin = (props) => {
  const classes = useStyles(props);
  return (
    <Grid item xs={false} sm={4} md={7} className={classes.image}>
    <Grid className={classes.leftpaper}>
      <FacebookLoginButton />
      <GoogleLoginButton />
      <TwitterLoginButton />
    </Grid>
  </Grid>
  );
};

export default LeftSideLogin;
