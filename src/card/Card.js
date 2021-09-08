import React from "react";
import {
  Button,
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Box,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStyles } from "./cardStyles";
import { useDispatch } from "react-redux";
import Rating from "@material-ui/lab/Rating";
import axios from "axios";

/**
 * @author Swarnim Porwal
 * @description 
 * @param 
 * @returns 
 */
const MediaCard = ({ data }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const addToCartHandler = async () => {
    var body = {
      productId: data._id,
      quantity: 1,
    };
    var config = {
      method: "post",
      url: "https://neostore-api.herokuapp.com/api/cart",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      data: body,
    };

    try {
      var res = await axios(config);
      const message = 'Added to Cart';
      dispatch({
        type: "SHOW_SNACKBAR",
        payload: { type: "success", message, open: true },
      });
    } catch (error) {
      const message= "Product already exist in cart";
      dispatch({
        type: "SHOW_SNACKBAR",
        payload: { type: "error", message, open: true },
      });
    }
  };
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          onClick={() => history.push(`/productdetailmodule/${data.id}`)}
          className={classes.media}
          image={data.mainImage}
        />
        <CardContent>
          <Typography
            onClick={() => history.push(`/productdetailmodule/${data.id}`)}
            component="h1"
            variant="h5"
            className={classes.FurnitureName}
          >
            {data.name}
          </Typography>
          <Typography
            onClick={() => history.push(`/productdetailmodule/${data.id}`)}
            component="h1"
            variant="h5"
            className={classes.FurnitureAmountName}
          >
            Rs. {data.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buttonAdd}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.cartButton}
          onClick={() => addToCartHandler()}
        >
          Add to Cart
        </Button>
      </CardActions>
      <Box component="fieldset" borderColor="transparent" display="flex"  justifyContent="center">
        <Rating name="simple-controlled" value={data.avgRating} />
      </Box>
    </Card>
  );
};

export default MediaCard;
