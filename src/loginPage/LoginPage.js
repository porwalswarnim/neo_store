import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import EmailIcon from "@material-ui/icons/Email";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useStyles } from "./loginPageStyles";
import { LOGIN_NEOSOFT_TECHNOLOGIES } from "./Link";
import Link from "@material-ui/core/Link";
import LeftSideLogin from "./LeftSideLogin";
import { useDispatch } from "react-redux";
import axios from "axios";

const LoginPage = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles(props);
  const [loginForm, setLoginForm] = useState({
    loginEmail: "",
    loginPassword: "",
  });
  const [values, setValues] = useState({
    showPassword: false,
  });

  const submitFormHandler = async (e) => {
    e.preventDefault();
    const data = {
      email: loginForm.loginEmail,
      password: loginForm.loginPassword,
    };
    var config = {
      method: "post",
      url: "https://neostore-api.herokuapp.com/api/auth/login",
      data: data,
    };

    try {
      const res = await axios(config);
      const {
        id,
        firstName,
        lastName,
        email,
        mobile,
        token,
        gender,
        createdAt,
      } = res?.data?.data;
      const message = res?.data?.message;
      localStorage.setItem("token", token);
      dispatch({
        type: "SHOW_SNACKBAR",
        payload: { type: "success", message, open: true },
      });
      dispatch({
        type: "LOGGED_IN",
        payload: { id, firstName, lastName, email, mobile, gender, createdAt },
      });
      history.push("/productmodule");
    } catch (error) {
      const message= "Username or password is invalid";
      dispatch({
        type: "SHOW_SNACKBAR",
        payload: { type: "error", message, open: true },
      });
    }
  };
  // const forgotPasswordHandler = async (e) => {
  //   e.preventDefault();

  //   var data = {
  //     email: loginForm.loginEmail,
  //   };
  //   var config = {
  //     method: "post",
  //     url: "https://neostore-api.herokuapp.com/api/auth/forgot-password",
  //     data,
  //   };

  //   try {
  //     var res = await axios(config);
  //     console.log(res)
  //     alert('Successfully Changed')
  //     localStorage.clear();
  //     history.push("/forgotpassword")
  //   }  catch(error){
  //     alert('Old Password is wrong')
  // }

  // };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Header />
      <div>
        <Grid container className={classes.mainLoginPageCSS} component="main">
          <LeftSideLogin />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <div className={classes.paper}>
              <LOGIN_NEOSOFT_TECHNOLOGIES />
              <form className={classes.form} onSubmit={submitFormHandler}>
                <OutlinedInput
                  className={classes.LoginEmailCSS}
                  placeholder="Email Address"
                  type="email"
                  variant="outlined"
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, loginEmail: e.target.value })
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <EmailIcon />
                    </InputAdornment>
                  }
                />

                <OutlinedInput
                  className={classes.LoginEmailCSS}
                  onChange={(e) =>
                    setLoginForm({
                      ...loginForm,
                      loginPassword: e.target.value,
                    })
                  }
                  placeholder="Password"
                  type={values.showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />

                <Button
                  type="submit"
                  fullWidth
                  className={`${
                    loginForm.loginEmail && loginForm.loginPassword
                      ? "btn-primary"
                      : "btn-disable"
                  } ${classes.submitButton}`}
                  disabled={!(loginForm.loginEmail && loginForm.loginPassword)}
                  variant="contained"
                  color="primary"
                >
                  Sign In
                </Button>
                <Grid item container row>
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
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;

// 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
// git clone porwalswarnim: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@github.com/https://github.com/porwalswarnim/neostore.git

// git clone https://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@github.com/porwalswarnim/neostore.git
