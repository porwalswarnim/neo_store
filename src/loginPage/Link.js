import { useStyles } from "./loginPageStyles";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";



export const LOGIN_NEOSOFT_TECHNOLOGIES = (props) =>{
  const classes = useStyles(props);
  return(
    <div>
    <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography
                component="h1"
                variant="h4"
                style={{ fontWeight: "bold" }}
              >
                Login to NeoSTORE
              </Typography>
              </div>
  )
}
