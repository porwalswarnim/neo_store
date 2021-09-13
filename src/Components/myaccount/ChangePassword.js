import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Grid, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import LeftSideBar from "./LeftSideBar";
import { useStyles } from "./changePasswordStyles";
import { MYACCOUNT_HEADING, CHANGE_PASSWORD_HEADING } from "./myacountUtils";
import axios from "axios";
import { SHOW_SNACKBAR } from "../../assets/types";
/**
 * @author Swarnim Porwal
 * @description this method is reponsible for changing password
 * @returns JSX for Change password screen
 */

const ChangePassword = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const classes = useStyles(props);
  const [values, setValues] = useState({
    showPassword: false,
  });
  const submitRegisterFormHandler = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      const message = "Passwords don't match";
      dispatch({
        type: SHOW_SNACKBAR,
        payload: { type: "success", message, open: true },
      });
    } else {
      var data = {
        password: oldPassword,
        newPassword: newPassword,
      };
      var config = {
        method: "post",
        url: "https://neostore-api.herokuapp.com/api/user/change-password",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        data,
      };

      try {
        var res = await axios(config);
        const message = "Password Changed Successfully";
        dispatch({
          type: SHOW_SNACKBAR,
          payload: { type: "success", message, open: true },
        });
        localStorage.clear();
        history.push("/login");
      } catch (error) {
        const message = "Old Password is Wrong";
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
      <MYACCOUNT_HEADING />
      <Grid item container className={classes.MainGrid} row xs={12}>
        <Grid xs={3}>
          <LeftSideBar />
        </Grid>
        <Grid xs={9} className={classes.RightSideBarCSS}>
          <Grid item className={classes.registerBoxGrid}>
            <CHANGE_PASSWORD_HEADING />
            <form className={classes.form} onSubmit={submitRegisterFormHandler}>
              <Grid container spacing={1} alignItems="flex-end">
                <OutlinedInput
                  className={classes.registerInputCSS}
                  onInput={(e) => setOldPassword(e.target.value)}
                  placeholder="Old Password"
                  style={{ marginTop: "60px" }}
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
                  onInput={(e) => setNewPassword(e.target.value)}
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
                  onInput={(e) => setConfirmPassword(e.target.value)}
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
                  type="submit"
                  style={{
                    margin: "25px",
                    marginLeft: "300px",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                  className={`${
                    oldPassword && newPassword && confirmPassword
                      ? "btn-primary"
                      : "btn-disable"
                  } ${classes.submitButton}`}
                  disabled={!(oldPassword && newPassword && confirmPassword)}
                  variant="contained"
                  color="primary"
                >
                  SUBMIT
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ChangePassword;
