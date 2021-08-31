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
import { RatingStar } from "./Rating";
import { useHistory } from "react-router-dom";
import { useStyles } from "./cardStyles";
import { useDispatch } from "react-redux";
import Rating from "@material-ui/lab/Rating";

const MediaCard = ({ data }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
 

  return (
    <Card className={classes.root} id="1">
      <CardActionArea>
        <CardMedia
          onClick={() => history.push("/productdetailmodule")}
          className={classes.media}
          image={data.mainImage}
        />
        <CardContent>
          <Typography
            onClick={() => history.push("/productdetailmodule")}
            component="h1"
            variant="h5"
            className={classes.FurnitureName}
          >
            {data.name}
          </Typography>
          <Typography
            onClick={() => history.push("/productdetailmodule")}
            component="h1"
            variant="h5"
            className={classes.FurnitureAmountName}
          >
            {data.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buttonAdd}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.cartButton}
          onClick={() => dispatch({ type: 'ADD_TO_CART',payload:data })}
        >
          Add to Cart
        </Button>
      </CardActions>
      <Box
component="fieldset"

// style={{ marginLeft: "30px" }}
borderColor="transparent"
>
<Rating
  name="simple-controlled"
  
  value={data.avgRating}
  
/>
</Box>
    </Card>
  );
}

export default MediaCard;