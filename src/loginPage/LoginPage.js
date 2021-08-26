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
import { LINK_REGISTER, LOGIN_NEOSOFT_TECHNOLOGIES } from "./Link";
import LeftSideLogin from "./LeftSideLogin";
import { useDispatch } from "react-redux";

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
  //   const data = {
  //     email: loginEmail,
  //     password: loginPassword,
  //   };
  //   var config = {
  //     method: "post",
  //     url: '180.149.241.208:3022/login'      ,
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       // ...data.getHeaders()
  //     },
  //     data: data,
  //   };
  //   try {
  //     const res = await axios(config);
  //     const { email, name, profile, token } = res?.data?.UserLogin;
  //     localStorage.setItem('email', email);
  //     localStorage.setItem('name', name);
  //     localStorage.setItem('profile', profile);
  //     localStorage.setItem('token', token);
  //     setFeedback(res.data.UserLogin.Feadbacks);
  //     alert("Logged In Succesfully")
  //     history.push("/feedback");
  //   } catch(err) {
  //       alert('Failed to login');
  //   }
    
  };

  //   dispatch({ type: "LOGGED_IN", payload: true });
  //   history.push("/productmodule");
  //   console.log(loginForm.loginEmail);
  //   console.log(loginForm.loginPassword);
  // };

  // const submitFormHandler = async (e) => {
  //   e.preventDefault();
    // const data = {
    //   email: loginEmail,
    //   password: loginPassword,
    // };
    // var config = {
    //   method: "post",
    //   url: LOGIN_URL,
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     // ...data.getHeaders()
    //   },
    //   data: data,
    // };

  //   try {
  //     const res = await axios(config);
  //     const { email, name, profile, token } = res?.data?.UserLogin;
  //     localStorage.setItem('email', email);
  //     localStorage.setItem('name', name);
  //     localStorage.setItem('profile', profile);
  //     localStorage.setItem('token', token);
  //     setFeedback(res.data.UserLogin.Feadbacks);
  //     alert("Logged In Succesfully")
  //     history.push("/feedback");
  //   } catch(err) {
  //       alert('Failed to login');
  //   }
    
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
                      <IconButton>
                        <EmailIcon />
                      </IconButton>
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
                <LINK_REGISTER />
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
