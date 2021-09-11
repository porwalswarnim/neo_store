import { Box, Grid, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import LeftSideBar from "./LeftSideBar";
import { useStyles } from "./addAddressStyles";
import { MYACCOUNT_HEADING, ADDRESS_HEADING } from "./myacountUtils";
import axios from "axios";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { ALL_ADDRESSES } from "../types";
import { useSelector } from "react-redux";
import AddAddressBox from "./AddAddressBox";

/**
 * @author Swarnim Porwal
 * @description this function returns a address card
 * @param {props} props that contains address object
 * @returns JSX for Address Card Screen
 */

const AddAddress = (props) => {
  const addAddress = useSelector((state) => state.addAddress);
  const history = useHistory();
  const classes = useStyles(props);
  const dispatch = useDispatch();
  var config = {
    method: "get",
    url: "https://neostore-api.herokuapp.com/api/user/address",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };

  const fetchAddress = async () => {
    try {
      const res = await axios(config);
      const data = res?.data?.data.address;
      dispatch({
        type: ALL_ADDRESSES,
        payload: data,
      });
    } catch (err) {}
  };

  useEffect(() => {
    fetchAddress(dispatch);
  }, []);

  return (
    <div>
      <MYACCOUNT_HEADING />
      <Grid item container className={classes.MainGrid} row xs={12}>
        <Grid xs={3}>
          <LeftSideBar />
        </Grid>
        <Grid xs={9} className={classes.RightSideBarCSS}>
          <Box boxShadow={7} className={classes.boxCSS}>
            <ADDRESS_HEADING />
            {addAddress.map((ele, i) => {
              return (
                <AddAddressBox
                  fetchAddress={fetchAddress}
                  data={ele}
                  key={ele._id}
                />
              );
            })}

            <Button
              variant="contained"
              onClick={() => history.push("/addNewAddress")}
              className={classes.addAddressCSS}
            >
              Add Address
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddAddress;
