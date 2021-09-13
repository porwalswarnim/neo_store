import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MediaCard from "../card/Card";
import { useStyles } from "./homePageStyles";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import { CardMedia } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

/**
 * @author Swarnim Porwal
 * @description this method puts all together different parts of homescreen like carousal, all products section and popular products section
 * @returns JSX for Home Screen
 */

const HomePage = (props) => {
  const listProducts = useSelector((state) => state.listProducts);
  const listProduct = listProducts.filter((ele) => ele.avgRating >= 4);
  const classes = useStyles(props);
  const history = useHistory();
  return (
    <div>
      <Grid className={classes.HomeBoxGrid}>
        <Grid container component="main" className={classes.registerBoxGrid}>
          <Grid item xs={12}>
            <Carousel
              NextIcon={<NavigateNextIcon />}
              PrevIcon={<NavigateBeforeIcon />}
            >
              {listProducts.map((ele, i) => {
                console.log("ele", ele);
                return (
                  <CardMedia
                    className={classes.image}
                    image={ele?.mainImage}
                    // onClick={() =>
                    //   history.push(
                    //     `/productmodule?${ele?.category?._id}`
                    //   )
                    // }
                  />
                );
              })}
            </Carousel>
          </Grid>
        </Grid>
        <Grid>
          <Typography className={classes.heading}>Popular Products</Typography>
          <Typography className={classes.viewAllCSS}>
            <Link
              onClick={() => history.push("/productmodule")}
              variant="body2"
              style={{
                color: "black",
              }}
            >
              View All
            </Link>
          </Typography>
        </Grid>
        <Grid container xs={12} style={{ marginLeft: "40px" }}>
          {listProduct.map((ele, i) => {
            return (
              <Grid item xs={12} sm={4} key={i}>
                <MediaCard data={ele} key={ele.id} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
