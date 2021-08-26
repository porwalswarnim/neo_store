import React from "react";
import { RatingStar } from "../card/Rating";
import Grid from "@material-ui/core/Grid";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import FeatureDetails from "./Feature";
import DescriptionShareDetails from "./shareSocialMediaButon";
import Button from "@material-ui/core/Button";
import DescriptionDetails from "./Description";
import { useStyles } from "./productDetailsStyles";
import { SHARE_BUTTON_HEADING } from "./productUtils";

const ProductDetailModule = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Grid item container className={classes.mainGrid} row xs={12}>
        <Grid item xs={5}>
          <Grid
            container
            component="main"
            className={classes.leftProductDetailGrid}
          >
            <Grid item xs={12} sm={4} md={12} className={classes.image}></Grid>
          </Grid>
          <Grid container item column xs={12} component="main">
            {[1, 2, 3].map((ele, i) => {
              return (
                <Grid
                  item
                  xs={3}
                  className={classes.smallImage}
                  style={{ marginLeft: "40px" }}
                ></Grid>
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
              Winchester Fabric Sofa
            </Typography>
            <RatingStar className={classes.ratingCSS} />
            <hr className={classes.hrCSS} />
            <Typography className={classes.priceCSS}>
              Price:
              <span className={classes.priceAmountCSS}>$59999</span>
            </Typography>
            <Typography style={{ fontSize: "30px" }}>
              Color:
              <span className={classes.priceAmountCSS}>blue</span>
            </Typography>
            <SHARE_BUTTON_HEADING />
            <DescriptionShareDetails />
            <Grid item container colomn style={{ marginTop: "30px" }}>
              <Button variant="contained"  className={classes.addtoCartCSS}>
                Add to Cart
              </Button>
              <Button variant="contained" className={classes.rateProductCSS}>
                RATE PRODUCT
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default ProductDetailModule;
