import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

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
const PopoverPopupState = (props) => {
  const classes = useStyles(props);
  const history = useHistory();
  return (
    <PopupState variant="popover">
      {(popupState) => (
        <div>
          <Button
            variant="contained"
            className={classes.loginBox}
            startIcon={<AssignmentIndIcon style={{ fontSize: "35px" }} />}
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
                onClick={() => history.push("/login")}
              >
                Sign In
              </Button>
              <Typography>
                New Customer?{" "}
                <span
                  style={{ color: "blue" }}
                  onClick={() => history.push("/registration")}
                >
                  Start here.
                </span>
              </Typography>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
};

export default PopoverPopupState;
