import { Grid, Typography, Button } from "@material-ui/core";
import LeftSideBar from "./LeftSideBar";
import React, { useState } from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import CloseIcon from "@material-ui/icons/Close";
import SaveIcon from "@material-ui/icons/Save";
import { useHistory } from "react-router-dom";
import { useStyles } from "./addNewAddressStyle";
import { useDispatch } from "react-redux";
import {
  MYACCOUNT_HEADING,
  ADD_NEW_ADDRESS_HEADING,
  MAX_100_HEADING,
} from "./myacountUtils";
import { SHOW_SNACKBAR } from "../types";
import axios from "axios";

/**
 * @author Swarnim Porwal
 * @description Add new address for the customer
 * @returns JSX for Add Address Screen
 */
const AddNewAddress = (props) => {
  const classes = useStyles(props);
  const history = useHistory();
  const dispatch = useDispatch();
  const [addNewAddress, setAddNewAddress] = useState({
    address: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
  });

  const SaveAddressHandler = async (e) => {
    e.preventDefault();
    history.push("/addAddress");
    var data = {
      addressLine: addNewAddress.address,
    pincode: addNewAddress.pincode,
    city: addNewAddress.city,
    state: addNewAddress.state,
    country: addNewAddress.country
    };
    var config = {
      method: "post",
      url: "https://neostore-api.herokuapp.com/api/user/address",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization : localStorage.getItem("token")
      },
      data,

    };

    try {
      var res = await axios(config);
      const message = 'Address Added successfully';
      dispatch({
        type: SHOW_SNACKBAR,
        payload: { type: "success", message, open: true },
      });
    } catch (error) {
      const message= "Something went Wrong";
      dispatch({
        type: SHOW_SNACKBAR,
        payload: { type: "error", message, open: true },
      });
    }
  };
  
  return (
    <div>
      <MYACCOUNT_HEADING />
      <Grid item container className={classes.MainGrid} row xs={12}>
        <Grid xs={3}>
          <LeftSideBar />
        </Grid>
        <Grid xs={9} className={classes.RightSideBarCSS}>
          <Grid item className={classes.registerBoxGrid}>
            <ADD_NEW_ADDRESS_HEADING />
            <form onSubmit={SaveAddressHandler}>
              <Grid container alignItems="flex-end">
                <OutlinedInput
                  className={classes.addressInputCSS}
                  onChange={(e) =>
                    setAddNewAddress({
                      ...addNewAddress,
                      address: e.target.value,
                    })
                  }
                  placeholder="Address"
                  variant="outlined"
                  type="text"
                  inputProps={{ maxLength: 100 }}
                />
                <Grid item container>
                  <MAX_100_HEADING />
                  <Typography
                    style={{
                      marginLeft: "245px",
                    }}
                  >
                    {addNewAddress.address.length}/100
                  </Typography>
                </Grid>
                <Grid item container>
                  <OutlinedInput
                    className={classes.pincodeInputCSS}
                    onChange={(e) =>
                      setAddNewAddress({
                        ...addNewAddress,
                        pincode: e.target.value,
                      })
                    }
                    placeholder="Pincode"
                    variant="outlined"
                    type="text"
                    inputProps={{ maxLength: 10 }}
                  />
                </Grid>
                <Grid item container>
                  <OutlinedInput
                    className={classes.cityInputCSS}
                    onChange={(e) =>
                      setAddNewAddress({
                        ...addNewAddress,
                        city: e.target.value,
                      })
                    }
                    placeholder="City"
                    variant="outlined"
                    type="text"
                  />
                  <OutlinedInput
                    className={classes.stateInputCSS}
                    onChange={(e) =>
                      setAddNewAddress({
                        ...addNewAddress,
                        state: e.target.value,
                      })
                    }
                    placeholder="State"
                    variant="outlined"
                    type="text"
                  />
                </Grid>
                <Grid item container>
                  <OutlinedInput
                    className={classes.countryInputCSS}
                    onChange={(e) =>
                      setAddNewAddress({
                        ...addNewAddress,
                        country: e.target.value,
                      })
                    }
                    placeholder="Country"
                    variant="outlined"
                    type="text"
                  />
                </Grid>

                <Button
                  className={classes.saveButton}
                  type="submit"
                  className={`${
                    addNewAddress ? "btn-primary" : "btn-disable"
                  } ${classes.saveButton}`}
                  startIcon={<SaveIcon style={{ fontSize: "30px" }} />}
                  disabled={
                    !(
                      addNewAddress.address &&
                      addNewAddress.pincode &&
                      addNewAddress.city &&
                      addNewAddress.state &&
                      addNewAddress.country
                    )
                  }
                >
                  Save
                </Button>

                <Button
                  onClick={() => history.push("/addAddress")}
                  className={classes.CancelButton}
                  startIcon={<CloseIcon style={{ fontSize: "30px" }} />}
                >
                  Cancel
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddNewAddress;
