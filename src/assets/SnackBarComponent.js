import { useDispatch, useSelector } from "react-redux";
import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { SHOW_SNACKBAR } from "./types";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SuccessSnackbar() {
  const dispatch = useDispatch();

  const { message, type, open } = useSelector((state) => state.rootReducer.snackbar);

  function handleClose() {
    dispatch({
      type: SHOW_SNACKBAR,
      payload: { open: false, type: "success", message: "" },
    });
  }

  return (
    <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
}
