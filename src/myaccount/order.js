import { Box, Grid, Typography, Button, CardMedia } from "@material-ui/core";
import React, { useEffect } from "react";
import LeftSideBar from "./LeftSideBar";
import { useStyles } from "./orderStyles";
import { MYACCOUNT_HEADING } from "./myacountUtils";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ALL_ORDERS } from "../types";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
/**
 * @author Swarnim Porwal
 * @description this method is responsible for showing the all the orders that has been made using order cards
 * @returns JSX for Order screen
 */
const OrderModule = (props) => {
  const allOrders = useSelector((state) => state.allOrders);
  const dispatch = useDispatch();
  const classes = useStyles(props);
  const history = useHistory();
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
      dispatch({
        type: "IS_LOADING",
        payload: true,
      });
      const res = await axios(config);
      dispatch({
        type: "IS_LOADING",
        payload: false,
      });
      const body = res?.data?.data?.orders;

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
      <MYACCOUNT_HEADING />
      <Grid item container className={classes.MainGrid} row xs={12}>
        <Grid xs={3}>
          <LeftSideBar />
        </Grid>
        <Grid xs={9} className={classes.RightSideBarCSS}>
          {allOrders.map((ele, i) => {
            const totalPrice = ele?.items.reduce(
              (total, currentValue) =>
                (total = total + currentValue?.productId?.price),
              0
            );
            const totalQuantity = ele?.items.reduce(
              (total, currentValue) => (total = total + currentValue.quantity),
              0
            );
            return (
              <Box boxShadow={7} className={classes.boxCSS}>
                <Typography className={classes.transitTypography}>
                  <span style={{ color: "brown" }}>TRANSIT</span> &nbsp; &nbsp;
                  &nbsp; &nbsp;Order By:
                  {ele._id}
                </Typography>
                <Typography
                  style={{
                    marginTop: "10px",
                    marginLeft: "15px",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  Placed on: {ele.updatedAt} &nbsp; &nbsp; &nbsp;/&nbsp; &nbsp;
                  GrandTotal : ${totalPrice}
                </Typography>
                <Typography
                  style={{
                    marginTop: "0px",
                    marginLeft: "15px",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  Total Quantity : {totalQuantity}
                </Typography>
                <Typography className={classes.orderTypography}>
                  <span style={{ color: "brown" }}>Order Details</span>
                </Typography>
                {ele.items.map((ele, i) => {
                  return (
                    <>
                      <Grid>
                        <CardMedia
                          className={classes.image}
                          image={ele?.productId?.mainImage}
                        />
                      </Grid>
                      <Box className={classes.imageBox}></Box>
                      <Typography style={{ marginLeft: "15px" }}>
                        {" "}
                        Name : {ele?.productId?.name}
                        &nbsp; &nbsp; Quantity : {ele?.quantity}
                        &nbsp; &nbsp; Price : {ele?.productId?.price} rs
                      </Typography>
                    </>
                  );
                })}
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.buttonInvoiceDownload}
                  onClick={() => history.push(`/ordermodule/${ele._id}`)}
                >
                  Show Invoice Bill
                </Button>
              </Box>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderModule;
