import { Grid, Typography, Button } from "@material-ui/core";
import { useStyles } from "./ReviewOrderStyles";
import {
  REVIEW_ORDER_LEFTSIDE_TYPOGRAPHY,
  REVIEW_ORDER_TYPOGRAPHY,
} from "./addCartUtils";

const ReviewOrderTotal = (props) => {
  const classes = useStyles(props);
  return (
    <Grid xs={12} item container row className={classes.MainGridItems}>
      <REVIEW_ORDER_TYPOGRAPHY />
      <Grid xs={12} item container row className={classes.MainGridItems}>
        <Grid xs={9}>
          <REVIEW_ORDER_LEFTSIDE_TYPOGRAPHY />
        </Grid>
        <Grid xs={3}>
          <Typography className={classes.amountTypography}>10000</Typography>
          <Typography
            component="h1"
            variant="h4"
            className={classes.amountTypography}
          >
            500
          </Typography>
          <Typography
            component="h1"
            variant="h4"
            className={classes.amountTypography}
          >
            10500
          </Typography>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          className={classes.buttonInvoiceDownload}
        >
          Proceed to buy
        </Button>
      </Grid>
    </Grid>
  );
};

export default ReviewOrderTotal;
