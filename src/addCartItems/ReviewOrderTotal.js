import { Grid, Typography, Button } from "@material-ui/core";
import { useStyles } from "./ReviewOrderStyles";

const ReviewOrderTotal = ({ total }) => {
  const classes = useStyles();
  return (
    <Grid xs={12} item container row className={classes.MainGridItems}>
      <Typography
        component="h1"
        variant="h4"
        style={{
          marginTop: "20px ",
          marginLeft: "30px",
          fontSize: "40px",
          fontWeight: "500",
        }}
      >
        Review Order
      </Typography>
      <Grid xs={12} item container row className={classes.MainGridItems}>
        <Grid xs={9}>
          <div>
            <Typography
              style={{
                paddingLeft: "30px",
                paddingTop: "20px",
                paddingBottom: "20px",
                fontSize: "25px",
                borderBottom: "1px solid #71606026",
              }}
            >
              Subtotal
            </Typography>
            <Typography
              component="h1"
              variant="h4"
              style={{
                paddingLeft: "30px",
                paddingTop: "20px",
                paddingBottom: "20px",
                fontSize: "25px",
                borderBottom: "1px solid #71606026",
              }}
            >
              GST (5%)
            </Typography>
            <Typography
              component="h1"
              variant="h4"
              style={{
                paddingLeft: "30px",
                paddingTop: "20px",
                paddingBottom: "20px",
                fontSize: "25px",
                borderBottom: "1px solid #71606026",
              }}
            >
              Order Total
            </Typography>
          </div>
        </Grid>
        <Grid xs={3}>
          <Typography className={classes.amountTypography}>{total}</Typography>
          <Typography
            component="h1"
            variant="h4"
            className={classes.amountTypography}
          >
            {(total * 5) / 100}
          </Typography>
          <Typography
            component="h1"
            variant="h4"
            className={classes.amountTypography}
          >
            {total + (total * 5) / 100}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ReviewOrderTotal;
