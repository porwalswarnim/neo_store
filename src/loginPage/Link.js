import React from "react";
import Link from "@material-ui/core/Link";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./loginPageStyles";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";

export const LINK_REGISTER = (props) =>{
    const history = useHistory();
    const classes = useStyles(props);
return(
<Grid container>
                  <Grid item style={{ marginTop: "30px" }}>
                    <Link
                      onClick={() => history.push("/registration")}
                      variant="body2"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      Register Now
                    </Link>
                  </Grid>
                  <Grid
                    item
                    style={{
                      marginTop: "30px",
                      marginLeft: "10px",
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    {" "}
                    |
                  </Grid>
                  <Grid item style={{ marginTop: "30px" }}>
                    <Link
                      onClick={() => history.push("/forgotpassword")}
                      variant="body2"
                      style={{
                        marginTop: "20px",
                        marginLeft: "10px",
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      Forgotten?
                    </Link>
                  </Grid>
                </Grid>
)
}

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
