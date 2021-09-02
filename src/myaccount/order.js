import { Box, Grid, Typography, Button, CardMedia } from "@material-ui/core";
import React, {useEffect} from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import LeftSideBar from "./LeftSideBar";
import { useStyles } from "./orderStyles";
import { MYACCOUNT_HEADING } from "./myacountUtils";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ALL_ORDERS } from "../types";
import { useSelector } from "react-redux";
const OrderModule = (props) => {
  const allOrders = useSelector((state) => state.allOrders);
  const dispatch = useDispatch();
  const classes = useStyles(props);

  var config = {
    method: "get",
    url: "https://neostore-api.herokuapp.com/api/order",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };

  const fetchOrder = async () => {
    try {
      const res = await axios(config);
      console.log('res1',res);
      const body = res?.data?.data?.orders;
      console.log('body',body)
      dispatch({
        type: ALL_ORDERS,
        payload: body,
      });
    } catch (err) {}
  };

  useEffect(() => {
    fetchOrder();
  }, []);
  return (
    <div>
      <Header />
      <MYACCOUNT_HEADING />
      <Grid item container className={classes.MainGrid} row xs={12}>
        <Grid xs={3}>
          <LeftSideBar />
        </Grid>
        <Grid xs={9} className={classes.RightSideBarCSS}>
          {allOrders.map((ele, i) => {
            return (
              <Box boxShadow={7} className={classes.boxCSS}>
                <Typography className={classes.transitTypography}>
                  <span style={{ color: "brown" }}>TRANSIT</span> Order
                  By:{ele._id}
                </Typography>
                <Typography style={{ marginTop: "10px", marginLeft: "15px" }}>
                  {" "}
                  Placed on: {ele.updatedAt} &nbsp;/&nbsp; &nbsp;$59999
                </Typography>
                <Box className={classes.imageBox}>
                  <Grid   >
                  <CardMedia
                  className={classes.image}
                image={ele?.items[0]?.productId?.mainImage}
              />
                  </Grid>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.buttonInvoiceDownload}
                >
                  Download Invoice as PDF
                </Button>
              </Box>
            );
          })}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default OrderModule;
