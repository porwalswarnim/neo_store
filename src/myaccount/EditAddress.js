import { Grid, Typography, Button, TextField } from "@material-ui/core";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import LeftSideBar from "./LeftSideBar";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import SaveIcon from "@material-ui/icons/Save";
import { useStyles } from "./editAddressStyles";
import {
  MYACCOUNT_HEADING,
  EDIT_HEADING,
  MAX_100_HEADING,
} from "./myacountUtils";

const EditAddress = (props) => {
  const history = useHistory();
  const classes = useStyles(props);
  const [addressData, setAddressData] = useState({
    address: "Sudama Nagar",
    pincode: "452009",
    city: "Indore",
    state: "Madhya Pradesh",
    country: "India",
  });

  const SaveEditAddressHandler = (e) => {
    e.preventDefault();
    history.push("/addAddress");
    console.log("addressData", addressData);
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
            <EDIT_HEADING />
            <form>
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
                  onClick={SaveEditAddressHandler}
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
            </form>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default EditAddress;
