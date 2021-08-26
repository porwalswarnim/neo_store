import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useStyles } from "./forgotPasswordStyles";

const ForgotScreen = (props) => {
  const history = useHistory();
  const [verificationCode, setVerificationCode] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  const classes = useStyles(props);
  const [values, setValues] = useState({
    showPassword: false,
  });

  const submitRegisterFormHandler = (e) => {
    e.preventDefault();
    console.log(verificationCode);
    console.log(registerPassword);
    console.log(registerConfirmPassword);
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <Header />
      <Grid item className={classes.registerBoxGrid}>
        <Typography
          component="h1"
          variant="h3"
          className={classes.recoverHeading}
        >
          Recover Password
        </Typography>
        <Typography
          component="h1"
          variant="h5"
          className={classes.verificationLine}
        >
          Verification code has been sent to your registered mail ID
        </Typography>
        <form onSubmit={submitRegisterFormHandler}>
          <Grid container spacing={1}>
            <OutlinedInput
              className={classes.registerInputCSS}
              style={{ marginTop: "50px" }}
              placeholder="Verification Code"
              type="text"
              variant="outlined"
              onInput={(e) => setVerificationCode(e.target.value)}
            />

            <OutlinedInput
              className={classes.registerInputCSS}
              onInput={(e) => setRegisterPassword(e.target.value)}
              placeholder="New Password"
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
                      <Visibility style={{ fontSize: "40px" }} />
                    ) : (
                      <VisibilityOff style={{ fontSize: "40px" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
            <OutlinedInput
              className={classes.registerInputCSS}
              onInput={(e) => setRegisterConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
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
                      <Visibility style={{ fontSize: "40px" }} />
                    ) : (
                      <VisibilityOff style={{ fontSize: "40px" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />

            <Button
              onClick={() => history.push("/login")}
              type="submit"
              style={{ margin: "15px", fontSize: "20px" }}
              className={`${
                verificationCode && registerPassword && registerConfirmPassword
                  ? "btn-primary"
                  : "btn-disable"
              } ${classes.submitButton}`}
              disabled={
                !(
                  verificationCode &&
                  registerPassword &&
                  registerConfirmPassword
                )
              }
              variant="contained"
              color="primary"
            >
              SUBMIT
            </Button>
          </Grid>
        </form>
      </Grid>
      <Footer />
    </div>
  );
};

export default ForgotScreen;
