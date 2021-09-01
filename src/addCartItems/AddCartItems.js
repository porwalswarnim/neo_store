import { Grid, Box, Typography } from "@material-ui/core";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useStyles } from "./addCartStyles";
import React from "react";
import Items from "./Items";
import ReviewOrderTotal from "./ReviewOrderTotal";
import HeaderItems from "./HeaderItems";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../types";
const AddCartItems = (props) => {
  const cardData = useSelector((state) => state.cardData);
  const classes = useStyles(props);
  const dispatch = useDispatch();
  var config = {
    method: "get",
    url: "https://neostore-api.herokuapp.com/api/cart",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };

  // useEffect(() => {
  //   try {
  //     (async () => {
  //       const res = await axios(config);
  //       const cardData = res?.data?.data?.products;
  //       console.log('cardData1',cardData)
  //       dispatch({
  //         type: ADD_TO_CART,
  //         payload: cardData,
  //       });
  //     })();
  //   } catch (err) {}
  // }, []);
  const fetchItems = async () => {
    try {
      const res = await axios(config);
      const cardData = res?.data?.data?.products;

        dispatch({
          type: ADD_TO_CART,
          payload: cardData,
        });
    } catch (err) {}
  };

  useEffect(() => {
    fetchItems();
  }, []);
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
                    <Items data={ele} key={ele.id} fetchItems={fetchItems}/>
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
