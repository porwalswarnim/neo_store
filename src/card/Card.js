import React from "react";
import {
  Button,
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { RatingStar } from "./Rating";
import { useHistory } from "react-router-dom";
import { useStyles } from "./cardStyles";


const MediaCard = ({ data }) => {
  const classes = useStyles();
  const history = useHistory();

 
  return (
    <Card className={classes.root} id="1">
      <CardActionArea>
        <CardMedia
          onClick={() => history.push("/productdetailmodule")}
          className={classes.media}
          image={data.cover}
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
            {data.amount}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buttonAdd}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.cartButton}
        >
          Add to Cart
        </Button>
      </CardActions>
      <RatingStar />
    </Card>
  );
}

export default MediaCard;