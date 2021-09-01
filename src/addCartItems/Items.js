import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import { Grid, Typography, Box, CardMedia } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { useStyles } from "./itemsStyles";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
const Items = ({ data, fetchItems }) => {
  const classes = useStyles();
  const [itemCount, setItemCount] = React.useState(data.quantity);

  const deleteItemHandler = async () => {
    var config = {
      method: "delete",
      url: `https://neostore-api.herokuapp.com/api/cart/${data._id}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization : localStorage.getItem("token")
      },
    };
    try {
      await axios(config);
      fetchItems();
    } catch (error) {
        console.log('error', error)
    }
  }
  return (
    <Grid item container row xs={12} className={classes.MainGridItems}>
      <Grid xs={2}>
        <CardMedia className={classes.imgCSS} image={data.productId.mainImage} />
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
            setItemCount(Math.max(itemCount - 1, 1));
          }}
        >
          <IndeterminateCheckBoxIcon className={classes.iconMinusCSS} />
        </Button>
          <Typography style={{ margin: "5px" }} >{itemCount}</Typography>
        <Button
          onClick={() => {
            setItemCount(itemCount + 1);
          }}
        >
          <AddBoxIcon className={classes.iconPlusCSS} />
        </Button>
      </Grid>
      <Grid xs={1} className={classes.priceCSS}>
        {data.productId.price}
      </Grid>
      <Grid xs={2} className={classes.totalAmountCSS}>
        <Typography className={classes.totalTypoCSS}> {data.totalAmount}</Typography>
      </Grid>
      <Grid xs={1} className={classes.priceCSS}>
      <IconButton
            type="submit"
            onClick={deleteItemHandler}
          >
            <DeleteOutlineIcon className={classes.iconPlusCSS} />
          </IconButton>
      </Grid>
    </Grid>
  );
};

export default Items;
