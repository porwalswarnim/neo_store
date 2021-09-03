import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import SettingsApplicationsSharpIcon from "@material-ui/icons/SettingsApplicationsSharp";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  loginBox: {
    paddingBottom: "10px",
    marginLeft: "10px",
    backgroundColor: "white",
    width: "100px",
  },
  signInButton: {
    backgroundColor: "rgb(251 180 21)",
    width: "200px",
    margin: "20px 40px",
  },
}));
const PopoverPopupStateLogout = (props) => {
  const counter = useSelector((state) => state.isLoggedIn)
  const dispatch = useDispatch();
  const classes = useStyles(props);
  const history = useHistory();

  const OnLogoutHandler = async (e) => {
    e.preventDefault();
    dispatch({type:"LOGGED_OUT",payload:false})
    history.push("/home")
      localStorage.clear();
      const message = "Logout Successfully";
      dispatch({
        type: "SHOW_SNACKBAR",
        payload: { type: "success", message, open: true },
      });
  };
  return (
    <PopupState variant="popover">
      {(popupState) => (
        <div>
          <Button
            variant="contained"
            className={classes.loginBox}
            startIcon={<SettingsApplicationsSharpIcon style={{ fontSize: "35px" }} />}
            endIcon={<ExpandMoreIcon style={{ fontSize: "35px" }} />}
            {...bindTrigger(popupState)}
          ></Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Box p={2}>
              <Button
                variant="contained"
                className={classes.signInButton}
                onClick={OnLogoutHandler}
              >
                LogOut
              </Button>
              
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
};

export default PopoverPopupStateLogout;
