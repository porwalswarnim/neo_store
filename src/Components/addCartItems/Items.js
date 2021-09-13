import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import { Grid, Typography, CardMedia } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { useStyles } from "./itemsStyles";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import { useDispatch} from "react-redux";
import { SHOW_SNACKBAR } from "../../assets/types";

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}
const Items = ({ data, fetchCartData }) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deleteItemHandler = async () => {
    var config = {
      method: "delete",
      url: `https://neostore-api.herokuapp.com/api/cart/${data._id}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    };
    try {
      await axios(config);
      const message = 'Deleted Item Successfully';
      dispatch({
        type: SHOW_SNACKBAR,
        payload: { type: "success", message, open: true },
      });
      fetchCartData(dispatch);
    } catch (error) {
    }
  };

  const updateCartHandler = async (id, count) => {
    var data = {
      quantity: count,
    };
    var config = {
      method: "put",
      url: `https://neostore-api.herokuapp.com/api/cart/${id}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      data,
    };

    try {
      var res = await axios(config);
      fetchCartData(dispatch);
    } catch (error) {}
  };
  return (
    <Grid item container row xs={12} className={classes.MainGridItems}>
      <Grid xs={2}>
        <CardMedia
          className={classes.imgCSS}
          image={data.productId.mainImage}
        />
      </Grid>
      <Grid xs={4}>
        <Typography variant="h5">{data.productId.name}</Typography>
        {/* <Typography variant="h6">{listProducts.description}</Typography> */}
        <Typography variant="h6">
          Status : <span style={{ color: "green" }}>IN STOCK</span>
        </Typography>
      </Grid>

      <Grid xs={2} item container row className={classes.iconGridCSS}>
        <Button
          onClick={() => {
            updateCartHandler(data._id, data.quantity - 1, 1);
          }}
          disabled={data.quantity === 1}
        >
          <IndeterminateCheckBoxIcon className={classes.iconMinusCSS} />
        </Button>
        <Typography style={{ margin: "5px" }}>{data.quantity}</Typography>
        <Button
          onClick={() => {
            updateCartHandler(data._id, data.quantity + 1);
          }}
        >
          <AddBoxIcon className={classes.iconPlusCSS} />
        </Button>
      </Grid>
      <Grid xs={1} className={classes.priceCSS}>
        {data.productId.price}
      </Grid>
      <Grid xs={2} className={classes.totalAmountCSS}>
        <Typography className={classes.totalTypoCSS}>
          {" "}
          {data.totalAmount}
        </Typography>
      </Grid>
      <Grid xs={1} className={classes.priceCSS}>
        <IconButton type="submit" onClick={handleClickOpen}>
          <DeleteOutlineIcon className={classes.iconPlusCSS} />
        </IconButton>
        <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          DELETE
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          Are you sure you want to delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={deleteItemHandler} color="primary">
            Yes
          </Button>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
      </Grid>
    </Grid>
  );
};

export default Items;
