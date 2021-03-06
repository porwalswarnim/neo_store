import { Box, Typography, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { useStyles } from "./addAddressStyles";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";
import { SHOW_SNACKBAR } from "../../assets/types";
import { getAddress, deleteAddress } from "../../context/store/userReducer";
/**
 * @author Swarnim Porwal
 * @description  this function redirect to the add address screen
 */
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
const AddAddressBox = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deleteAddressHandler = () => {
    dispatch(deleteAddress(data._id));
    try {
      handleClose();
      dispatch({
        type: SHOW_SNACKBAR,
        payload: {
          type: "success",
          message: "Address Deleted successfully",
          open: true,
        },
      });
      dispatch(getAddress());
    } catch (error) {
      dispatch({
        type: SHOW_SNACKBAR,
        payload: { type: "error", message: "Something went Wrong", open: true },
      });
    }
  };

  return (
    <Box display="flex" p={1} boxShadow={7} className={classes.boxCSS}>
      <Box p={1} flexGrow={1}>
        <Typography className={classes.addressTypography}>
          {data.addressLine}
        </Typography>
        <Typography className={classes.addressTypography}>
          {data.city} - <span>{data.pincode}</span>
        </Typography>
        <Typography className={classes.addressTypography}>
          {data.state}, {data.country}
        </Typography>

        <Button
          variant="contained"
          onClick={() => history.push(`/editAddress/${data._id}`)}
          color="primary"
          className={classes.EditButtonCSS}
        >
          Edit
        </Button>
      </Box>
      <Box p={1}>
        <IconButton type="submit" onClick={handleClickOpen}>
          <CloseIcon className={classes.closeIconCSS} />
        </IconButton>
      </Box>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
            DELETE
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this Address?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={deleteAddressHandler} color="primary">
              Yes
            </Button>
            <Button onClick={handleClose} color="primary">
              No
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Box>
  );
};

export default AddAddressBox;
