import Header from "../header/Header";
import Footer from "../footer/Footer";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MediaCard from "../card/Card";
import { useStyles } from "./homePageStyles";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const HomePage = (props) => {
  const listProducts = useSelector((state) => state.listProducts);
  const listProduct = listProducts.filter((ele) => ele.avgRating >= 4);
  const classes = useStyles(props);
  const history = useHistory();
  return (
    <div>
      <Header />
      <Grid className={classes.HomeBoxGrid}>
        <Grid container component="main" className={classes.registerBoxGrid}>
          <Grid item xs={12} className={classes.image}></Grid>
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
        <Grid container item xs={12} style={{ marginLeft: "40px" }}>
          {listProduct.map((ele, i) => {
            return (
              <Grid item xs={12} sm={4} key={i}>
                <MediaCard data={ele} key={ele.id} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default HomePage;
