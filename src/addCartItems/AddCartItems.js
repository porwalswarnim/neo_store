import { Grid, Box, Typography } from "@material-ui/core";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useStyles } from "./addCartStyles";
import React from "react";
import Items from "./Items";
import ReviewOrderTotal from "./ReviewOrderTotal";
import HeaderItems from "./HeaderItems";
import { useSelector } from "react-redux";

const AddCartItems = (props) => {
  const cardData = useSelector(state => state.cardData)
  const classes = useStyles(props);
  if(cardData.length === 0 ) {
    return(
      <div> No Data</div>
    )
  }
  return (
    <Grid>
      <Header />
      <Grid className={classes.mainGrid}>
        <Grid item container row xs={12}>
          <Grid xs={7} className={classes.leftSideGrid}>
            <Box boxShadow={8}>
            <HeaderItems />
           
            {cardData.map((ele, i) => {
              return (
                <Box style={{ marginTop: "10px" }} boxShadow={5}>
                  <Items data={ele} cardData={cardData} key={ele.id}/>
                </Box>
              );
            })}
             </Box>
          </Grid>
          <Grid xs={4} className={classes.rightSideGrid}>
            <Box boxShadow={8}>
              <ReviewOrderTotal />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
};

export default AddCartItems;
