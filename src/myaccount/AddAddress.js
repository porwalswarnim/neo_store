import { Box, Grid, Typography, Button } from "@material-ui/core";
import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useHistory } from "react-router-dom";
import LeftSideBar from "./LeftSideBar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { useStyles } from "./addAddressStyles";
import { MYACCOUNT_HEADING, ADDRESS_HEADING } from "./myacountUtils";

const AddAddress = (props) => {
  const history = useHistory();
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
          <Box boxShadow={7} className={classes.boxCSS}>
            <ADDRESS_HEADING />
            <Box display="flex" p={1} boxShadow={7} className={classes.boxCSS}>
              <Box p={1} flexGrow={1}>
                <Typography className={classes.addressTypography}>
                  Sudama Nagar
                </Typography>
                <Typography className={classes.addressTypography}>
                  Indore - <span>452009</span>
                </Typography>
                <Typography className={classes.addressTypography}>
                  India
                </Typography>

                <Button
                  variant="contained"
                  onClick={() => history.push("/editAddress")}
                  color="primary"
                  className={classes.EditButtonCSS}
                >
                  Edit
                </Button>
              </Box>
              <Box p={1}>
                <IconButton
                  type="submit"
                  // onClick={() => history.push("/editAddress")}
                >
                  <CloseIcon className={classes.closeIconCSS} />
                </IconButton>
              </Box>
            </Box>
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
      <Footer />
    </div>
  );
};

export default AddAddress;
