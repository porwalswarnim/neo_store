import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./headerItemsStyles";

const HeaderItems = (props) => {
  const classes = useStyles(props);
  return (
    <Grid item container row xs={12} className={classes.headerMainGridItems}>
      <Grid item xs={6}>
        <Typography style={{ fontSize: "25px",}}>Product</Typography>
      </Grid>

      <Grid item xs={2}>
        <Typography style={{ fontSize: "25px", marginLeft:'30px' }}>Quantity</Typography>
      </Grid>

      <Grid item xs={1}>
        <Typography style={{ fontSize: "25px",marginLeft:'00px'  }}>Price</Typography>
      </Grid>

      <Grid item xs={1}>
        <Typography style={{ fontSize: "25px",marginLeft:'10px'  }}>Total</Typography>
      </Grid>
    </Grid>
  );
};

export default HeaderItems;
