import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";
import { useDispatch, useSelector } from "react-redux";
import { LOGGED_OUT } from "../../types";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const ConfirmationBox = () => {
  const { confirmationmessage, snackbarmessage, title, open, history, path } =
    useSelector((state) => state.isConfirmation);
  const dispatch = useDispatch();
  const message = snackbarmessage;
  const handleClose = () => {
    dispatch({ type: "IS_CONFIRMATION", payload: false });
  };
  const handleConfirmation = () => {
    dispatch({ type: LOGGED_OUT });
    history.push(path);
    localStorage.clear();
    dispatch({ type: "LOGGED_IN", payload: false });
    dispatch({
      type: "SHOW_SNACKBAR",
      payload: { type: "success", message, open: true },
    });
    dispatch({ type: "IS_CONFIRMATION", payload: false });
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{confirmationmessage}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            NO
          </Button>
          <Button
            onClick={handleConfirmation}
            variant="contained"
            color="primary"
          >
            YES
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmationBox;
