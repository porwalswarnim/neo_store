import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import { Grid, Typography, Box, CardMedia } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { useStyles } from "./itemsStyles";

const Items = ({data,cardData}) => {
 
  const classes = useStyles();
  return (
    <Grid item container row xs={12} className={classes.MainGridItems}>
      <Grid xs={2} >
      <CardMedia
          className={classes.imgCSS}
          image={data.cover}
        />
      </Grid>
      <Grid xs={4}>
        <Typography variant="h5">
          {data.name}
        </Typography>
        <Typography variant="h6">
        {data.details}
        </Typography>
        <Typography variant="h6">
          Status : <span style={{ color: "green" }}>IN STOCK</span>
        </Typography>
      </Grid>

      <Grid xs={2} item container row className={classes.iconGridCSS}>
        <IndeterminateCheckBoxIcon className={classes.iconMinusCSS} />
        <Box boxShadow={5} className={classes.plusMinusBoxCSS}>
          <Typography style={{ margin: "5px"}}>
          {cardData.length === 0 ?  '' :cardData.length}
          </Typography>
        </Box>
        <AddBoxIcon className={classes.iconPlusCSS} />
      </Grid>
      <Grid xs={1} className={classes.priceCSS}>
      {data.amount}
      </Grid>
      <Grid xs={2} className={classes.totalAmountCSS}>
        <Typography className={classes.totalTypoCSS}>40000</Typography>
      </Grid>
      <Grid xs={1} className={classes.priceCSS}>
        <DeleteOutlineIcon className={classes.iconPlusCSS} 
          />
      </Grid>
    </Grid>
  );
};

export default Items;
