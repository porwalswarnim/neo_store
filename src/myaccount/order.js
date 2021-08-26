import { Box, Grid, Typography, Button } from "@material-ui/core";
import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import LeftSideBar from "./LeftSideBar";
import { useStyles } from "./orderStyles";
import { MYACCOUNT_HEADING } from "./myacountUtils";

const OrderModule = (props) => {
  const classes = useStyles(props);
  return (
    <div>
      <Header />
      <MYACCOUNT_HEADING />
      <Grid item container className={classes.MainGrid} row xs={12}>
        <Grid xs={3}>
          <LeftSideBar />
        </Grid>
        <Grid xs={9} className={classes.RightSideBarCSS}>
          {[1, 2, 3].map((ele, i) => {
            return (
              <Box boxShadow={7} className={classes.boxCSS}>
                <Typography className={classes.transitTypography}>
                  <span style={{ color: "brown" }}>TRANSIT</span> Order
                  By:ORDERNO_1
                </Typography>
                <Typography style={{ marginTop: "10px", marginLeft: "15px" }}>
                  {" "}
                  Placed on: 20/08/2021/$59999
                </Typography>
                <Box className={classes.imageBox}>
                  <Grid className={classes.image}></Grid>
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
