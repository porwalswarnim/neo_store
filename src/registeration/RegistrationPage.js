import React, { useState } from "react";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import FacebookLoginButton from "../loginPage/FacebookLogin";
import GoogleLoginButton from "../loginPage/GoogleLogin";
import CallIcon from "@material-ui/icons/Call";
import { useHistory } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import EmailIcon from "@material-ui/icons/Email";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useDispatch } from "react-redux";
import { useStyles } from "./registrationStyles";
import { REGISTER_HEADING, MAX_100_KEYWORD } from "./registrationUtils";
import axios from "axios";
import { SHOW_SNACKBAR } from "../types";
/**
 * @author Swarnim Porwal
 * @description this method is responsible for registering user by accepting information like firstname, lastname, email, password, mobile no, gender
 * @returns JSX for Registration Screen
 */

const RegistrationScreen = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [registrationFormDetails, setRegistrationFormDetails] = useState({
    firstName: "",
    lastName: "",
    registerEmail: "",
    registerPassword: "",
    registerConfirmPassword: "",
    radio: "male",
    mobileNumber: "",
  });
  const classes = useStyles(props);
  const [values, setValues] = useState({
    showPassword: false,
  });

  const handleRadioChange = (e) => {
    setRegistrationFormDetails({
      ...registrationFormDetails,
      radio: e.target.value,
    });
  };
  const submitRegisterFormHandler = async (e) => {
    e.preventDefault();
    if (
      registrationFormDetails.registerPassword !==
      registrationFormDetails.registerConfirmPassword
    ) {
      const message = "Passwords don't match";
      dispatch({
        type: SHOW_SNACKBAR,
        payload: { type: "error", message, open: true },
      });
    } else {
      var data = {
        firstName: registrationFormDetails.firstName,
        lastName: registrationFormDetails.lastName,
        email: registrationFormDetails.registerEmail,
        mobile: registrationFormDetails.mobileNumber,
        gender: registrationFormDetails.radio,
        password: registrationFormDetails.registerPassword,
        confirm_password: registrationFormDetails.registerConfirmPassword,
      };

      var config = {
        method: "post",
        url: "https://neostore-api.herokuapp.com/api/auth/register",
        data,
      };
      try {
        var res = await axios(config);
        const message = "Successfully Registered";
        dispatch({
          type: SHOW_SNACKBAR,
          payload: { type: "success", message, open: true },
        });
        history.push("/login");
      } catch (error) {
        const message = "Email Already registered";
        dispatch({
          type: SHOW_SNACKBAR,
          payload: { type: "error", message, open: true },
        });
      }
    }
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <Grid item container row className={classes.mainGrid}>
        <Grid className={classes.facebookCSS}>
          <FacebookLoginButton />
        </Grid>
        <Grid className={classes.GoogleCSS}>
          <GoogleLoginButton />
        </Grid>
      </Grid>
      <Grid item className={classes.registerBoxGrid}>
        <REGISTER_HEADING />
        <form className={classes.form} onSubmit={submitRegisterFormHandler}>
          <Grid container spacing={1} alignItems="flex-end">
            <OutlinedInput
              className={classes.registerInputCSS}
              placeholder="First Name"
              type="text"
              variant="outlined"
              onInput={(e) =>
                setRegistrationFormDetails({
                  ...registrationFormDetails,
                  firstName: e.target.value,
                })
              }
              endAdornment={
                <InputAdornment position="end">
                  <TextFieldsIcon style={{ fontSize: "40px" }} />
                </InputAdornment>
              }
            />
            <OutlinedInput
              className={classes.registerInputCSS}
              placeholder="Last Name"
              type="text"
              variant="outlined"
              onInput={(e) =>
                setRegistrationFormDetails({
                  ...registrationFormDetails,
                  lastName: e.target.value,
                })
              }
              endAdornment={
                <InputAdornment position="end">
                  <TextFieldsIcon position="end" style={{ fontSize: "40px" }} />
                </InputAdornment>
              }
            />
            <OutlinedInput
              className={classes.registerInputCSS}
              placeholder="Email Address"
              onInput={(e) =>
                setRegistrationFormDetails({
                  ...registrationFormDetails,
                  registerEmail: e.target.value,
                })
              }
              type="email"
              variant="outlined"
              endAdornment={
                <InputAdornment position="end">
                  <EmailIcon style={{ fontSize: "40px" }} />
                </InputAdornment>
              }
            />
            <OutlinedInput
              className={classes.registerInputCSS}
              onInput={(e) =>
                setRegistrationFormDetails({
                  ...registrationFormDetails,
                  registerPassword: e.target.value,
                })
              }
              inputProps={{ minLength: 6 }}
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
              onInput={(e) =>
                setRegistrationFormDetails({
                  ...registrationFormDetails,
                  registerConfirmPassword: e.target.value,
                })
              }
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
            <OutlinedInput
              className={classes.registerInputCSS}
              placeholder="Mobile No."
              onInput={(e) =>
                setRegistrationFormDetails({
                  ...registrationFormDetails,
                  mobileNumber: e.target.value,
                })
              }
              type="text"
              variant="outlined"
              inputProps={{ maxLength: 10 }}
              endAdornment={
                <InputAdornment position="end">
                  <CallIcon style={{ fontSize: "40px" }} />
                </InputAdornment>
              }
            />
            <Grid item container justifyContent="space-between">
              <MAX_100_KEYWORD />
              <Typography
                style={{
                  marginRight: "15px",
                }}
              >
                {registrationFormDetails.mobileNumber.length}/10
              </Typography>
            </Grid>
            <Grid style={{ marginLeft: "15px" }}>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={registrationFormDetails.radio}
                onChange={handleRadioChange}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </Grid>
            <Button
              type="submit"
              fullWidth
              className={`${
                registrationFormDetails ? "btn-primary" : "btn-disable"
              } ${classes.submitButton}`}
              disabled={
                !(
                  registrationFormDetails.firstName &&
                  registrationFormDetails.lastName &&
                  registrationFormDetails.registerEmail &&
                  registrationFormDetails.registerPassword &&
                  registrationFormDetails.registerConfirmPassword &&
                  registrationFormDetails.mobileNumber 
                )
              }
              variant="contained"
              color="primary"
            >
              Register
            </Button>
          </Grid>
        </form>
      </Grid>
    </div>
  );
};

export default RegistrationScreen;
