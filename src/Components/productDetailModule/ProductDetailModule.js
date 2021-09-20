import React from "react";
import Rating from "@material-ui/lab/Rating";
import { Grid, CardMedia, Box } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import FeatureDetails from "./Feature";
import DescriptionShareDetails from "./shareSocialMediaButon";
import Button from "@material-ui/core/Button";
import DescriptionDetails from "./Description";
import { useStyles } from "./productDetailsStyles";
import { SHARE_BUTTON_HEADING } from "./productUtils";
import { useSelector } from "react-redux";
/**
 * @author Swarnim Porwal
 * @description this method is responsible for showing the details of a product, it receives data from detail context 
 * @returns JSX for Product Detail Screen
 */
const ProductDetailModule = (props) => {
  const listProducts = useSelector((state) => state.rootReducer.listProducts);
  const history = useHistory();
  const { id } = useParams();
  const listProduct = listProducts.filter((ele) => ele._id === id)[0];

  const classes = useStyles();
  return (
    <div>
      <Grid item container className={classes.mainGrid} row xs={12}>
        <Grid item xs={5}>
          <Grid
            container
            component="main"
            className={classes.leftProductDetailGrid}
          >
            <Grid item xs={12} sm={4} md={12}>
              <CardMedia
                onClick={() => history.push("/productdetailmodule")}
                className={classes.image}
                image={listProduct.mainImage}
              />
            </Grid>
          </Grid>
          <Grid container item column xs={12} spacing={2} component="main">
            {listProduct.subImages.map((ele, i) => {
              return (
                <Grid item xs={4}>
                  <CardMedia
                    className={classes.smallImage}
                    image={ele}
                    style={{ marginLeft: "10px" }}
                  />
                </Grid>
              );
            })}
          </Grid>
          <Grid item container row className={classes.footerDescriptionCSS}>
            <DescriptionDetails />
            <FeatureDetails />
          </Grid>
        </Grid>
        <Grid item xs={7}>
          <Grid className={classes.rightProductDetailGrid}>
            <Typography
              component="h1"
              variant="h4"
              className={classes.furnitureNameCSS}
            >
              {listProduct.name}
            </Typography>
            <Box component="fieldset" borderColor="transparent">
              <Rating name="simple-controlled" value={listProduct.avgRating} />
            </Box>
            <hr className={classes.hrCSS} />
            <Typography className={classes.priceCSS}>
              Price: 
              <span className={classes.priceAmountCSS}>
                Rs. {listProduct.price}
              </span>
            </Typography>
            <Typography style={{ fontSize: "30px" }}>
              Color:
              <span className={classes.priceAmountCSS}>
                {listProduct.color.name}
              </span>
            </Typography>
            <SHARE_BUTTON_HEADING />
            <DescriptionShareDetails />
            <Grid item container colomn style={{ marginTop: "30px" }}>
              <Button variant="contained" className={classes.addtoCartCSS}>
                Add to Cart
              </Button>
              <Button variant="contained" className={classes.rateProductCSS}>
                RATE PRODUCT
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetailModule;
