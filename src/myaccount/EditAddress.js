import { Grid, Typography, Button, TextField } from "@material-ui/core";
import LeftSideBar from "./LeftSideBar";
import { useHistory, useParams } from "react-router-dom";
import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import SaveIcon from "@material-ui/icons/Save";
import { useStyles } from "./editAddressStyles";
import { useDispatch } from "react-redux";
import {
  MYACCOUNT_HEADING,
  EDIT_HEADING,
  MAX_100_HEADING,
} from "./myacountUtils";
import axios from "axios";
import { useSelector } from "react-redux";


/**
 * @author Swarnim Porwal
 * @description Edit address for the customer
 * @returns JSX for Edit Address Screen
 */
const EditAddress = (props) => {
  const dispatch = useDispatch();
  const addAddress = useSelector((state) => state.addAddress);
  const { id } = useParams();
  const address = addAddress.filter(ele => ele._id === id)[0]

  const history = useHistory();
  const classes = useStyles(props);
  const [addressData, setAddressData] = useState({
    address: address.addressLine,
    pincode: address.pincode,
    city: address.city,
    state: address.state,
    country: address.country,
  });

  const updateAddressHandler = async (e) => {
    e.preventDefault();
    history.push("/addAddress");
    var data = {
      addressLine: addressData.address,
      pincode: addressData.pincode,
      city: addressData.city,
      state: addressData.state,
      country: addressData.country,
    };
    var config = {
      method: "put",
      url: `https://neostore-api.herokuapp.com/api/user/address/${id}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      data,
    };

    try {
      var res = await axios(config);
      const message= "Address Edited Successfully";
      dispatch({
        type: "SHOW_SNACKBAR",
        payload: { type: "success", message, open: true },
      });
    } catch (error) {
      const message= "Something went Wrong";
      dispatch({
        type: "SHOW_SNACKBAR",
        payload: { type: "error", message, open: true },
      });
    }
  };
  

  if (addAddress.length === 0) {
    history.push("/addAddress");
  }

  return (
    <div>
      <MYACCOUNT_HEADING />
      <Grid item container className={classes.MainGrid} row xs={12}>
        <Grid xs={3}>
          <LeftSideBar />
        </Grid>
        <Grid xs={9} className={classes.RightSideBarCSS}>
          <Grid item className={classes.registerBoxGrid}>
            <EDIT_HEADING />
            <Grid container alignItems="flex-end">
              <TextField
                className={classes.addressInputCSS}
                label="Address"
                variant="outlined"
                onChange={(e) =>
                  setAddressData({ ...addressData, address: e.target.value })
                }
                inputProps={{ maxLength: 100 }}
                value={addressData.address}
              />

              <Grid item container>
                <MAX_100_HEADING />
                <Typography
                  style={{
                    marginLeft: "235px",
                  }}
                >
                  {addressData.address.length}/100
                </Typography>
              </Grid>
              <Grid item container>
                <TextField
                  className={classes.pincodeInputCSS}
                  label="Pincode"
                  variant="outlined"
                  onChange={(e) =>
                    setAddressData({
                      ...addressData,
                      pincode: e.target.value,
                    })
                  }
                  value={addressData.pincode}
                />
              </Grid>
              <Grid item container>
                <TextField
                  label="City"
                  variant="outlined"
                  className={classes.cityInputCSS}
                  onChange={(e) =>
                    setAddressData({ ...addressData, city: e.target.value })
                  }
                  value={addressData.city}
                />
                <TextField
                  label="State"
                  variant="outlined"
                  className={classes.stateInputCSS}
                  onChange={(e) =>
                    setAddressData({ ...addressData, state: e.target.value })
                  }
                  value={addressData.state}
                />
              </Grid>
              <Grid item container>
                <TextField
                  label="Country"
                  variant="outlined"
                  className={classes.countryInputCSS}
                  onChange={(e) =>
                    setAddressData({
                      ...addressData,
                      country: e.target.value,
                    })
                  }
                  value={addressData.country}
                />
              </Grid>
              <Button
                className={classes.saveButton}
                startIcon={<SaveIcon style={{ fontSize: "30px" }} />}
                onClick={updateAddressHandler}
              >
                Save
              </Button>
              <Button
                className={classes.CancelButton}
                startIcon={<CloseIcon style={{ fontSize: "30px" }} />}
                onClick={() => history.push("/addAddress")}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default EditAddress;
