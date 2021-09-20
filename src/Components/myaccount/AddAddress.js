import { Box, Grid, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import LeftSideBar from "./LeftSideBar";
import { useStyles } from "./addAddressStyles";
import { MYACCOUNT_HEADING, ADDRESS_HEADING } from "./myacountUtils";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AddAddressBox from "./AddAddressBox";
import { getAddress } from "../../context/store/userReducer";

/**
 * @author Swarnim Porwal
 * @description this function returns a address card
 * @param {props} props that contains address object
 * @returns JSX for Address Card Screen
 */

const AddAddress = (props) => {
  const address = useSelector((state) => state.app.address);
  const history = useHistory();
  const classes = useStyles(props);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAddress())
  }, [])

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
            {address?.map((ele, i) => {
              return (
                <AddAddressBox
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
