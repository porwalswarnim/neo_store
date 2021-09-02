import { Grid, Typography, Box } from "@material-ui/core";
import { useStyles } from "./headerItemsStyles";

const HeaderItems = (props) => {
  const classes = useStyles(props);
  return (
    <Grid item container row xs={12} className={classes.headerMainGridItems}>
      <Grid xs={6}>
        <Typography style={{ fontSize: "25px",}}>Product</Typography>
      </Grid>

      <Grid xs={2}>
        <Typography style={{ fontSize: "25px", marginLeft:'30px' }}>Quantity</Typography>
      </Grid>

      <Grid xs={1}>
        <Typography style={{ fontSize: "25px",marginLeft:'00px'  }}>Price</Typography>
      </Grid>

      <Grid xs={1}>
        <Typography style={{ fontSize: "25px",marginLeft:'10px'  }}>Total</Typography>
      </Grid>
    </Grid>
  );
};

export default HeaderItems;
