import { Grid, Typography, Button } from "@material-ui/core";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import LeftSideBar from "./LeftSideBar";
import React, { useState } from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import CloseIcon from "@material-ui/icons/Close";
import SaveIcon from "@material-ui/icons/Save";
import { useHistory } from "react-router-dom";
import { useStyles } from "./addNewAddressStyle";
import {
  MYACCOUNT_HEADING,
  ADD_NEW_ADDRESS_HEADING,
  MAX_100_HEADING,
} from "./myacountUtils";

const AddNewAddress = (props) => {
  const classes = useStyles(props);
  const history = useHistory();

  const [addNewAddress, setAddNewAddress] = useState({
    address: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
  });

  const SaveAddressHandler = (e) => {
    e.preventDefault();
    history.push("/addAddress");
    console.log(addNewAddress.address);
    console.log(addNewAddress.pincode);
    console.log(addNewAddress.city);
    console.log(addNewAddress.state);
    console.log(addNewAddress.country);
  };
  return (
    <div>
      <Header />
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
                    inputProps={{ maxLength: 10 }}
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
                    inputProps={{ maxLength: 10 }}
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
                    inputProps={{ maxLength: 10 }}
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
      <Footer />
    </div>
  );
};

export default AddNewAddress;
