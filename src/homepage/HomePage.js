import Header from "../header/Header";
import Footer from "../footer/Footer";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MediaCard from "../card/Card";
import { useStyles } from "./homePageStyles";
import { useSelector } from "react-redux";

const data = [
  {
    id: 1,
    cover:'backgroundfurnitureimage.jpg',
    name: "Furniture Name1",
    amount: "$40000",
    details:'by Swarnim',
  },
  {
    id: 2,
    cover:'backgroundlogin.jpg',
    name: "Furniture Name2",
    amount: "$30000",
    details:'by Rajat',
  },
];
const HomePage = (props) => {
  const listProducts = useSelector(state => state.listProducts)
  const classes = useStyles(props);
  return (
    <div>
      <Header />
      <Grid className={classes.HomeBoxGrid}>
        <Grid container component="main" className={classes.registerBoxGrid}>
          <Grid item xs={12} className={classes.image}></Grid>
        </Grid>
        <Grid>
          <Typography className={classes.heading}>Popular Products</Typography>
          <Typography className={classes.viewAllCSS}>View All</Typography>
        </Grid>
        <Grid container item xs={12} style={{ marginLeft: "40px" }}>
          {data.map((ele, i) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={i}>
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
