import { Grid, AppBar, Typography, Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import SettingsApplicationsSharpIcon from "@material-ui/icons/SettingsApplicationsSharp";
import { makeStyles } from "@material-ui/core/styles";
import SortOutlinedIcon from "@material-ui/icons/SortOutlined";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import HomeIcon from "@material-ui/icons/Home";
const useStyles = makeStyles((theme) => ({
    LeftSideBarCSS: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    orderButton: {
        width: "400px",
        backgroundColor: "white",
        color: "#2a51bf",
        fontSize: "20px",
        border: "1px solid #71606026",
    },
}));
const LeftSideBar = (props) => {
    const classes = useStyles(props);
    const history = useHistory();
    return (
    <Grid  className={classes.LeftSideBarCSS}>
      <SettingsApplicationsSharpIcon
        style={{ fontSize: "300px", marginTop: "-20px" }}
      />
      <Typography
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          color: "#d42e2e",
          marginTop: "-20px",
        }}
      >
        Swarnim Porwal
      </Typography>

      <Button
        style={{ marginTop: "10px" }}
        className={classes.orderButton}
         onClick={() => history.push("/ordermodule")}
        startIcon={<SortOutlinedIcon style={{ fontSize: "30px" }} />}
      >
        Order
      </Button>
      <Button
        style={{ marginTop: "10px" }}
        className={classes.orderButton}
        startIcon={<AccountBoxIcon style={{ fontSize: "30px" }} />}
        onClick={() => history.push("/profilepage")}
      >
        Profile
      </Button>
      <Button
        style={{ marginTop: "10px" }}
        className={classes.orderButton}
        onClick={() => history.push("/addAddress")}
        startIcon={<HomeIcon style={{ fontSize: "30px" }} />}
      >
        Address
      </Button>
      <Button
        style={{ marginTop: "10px" }}
        className={classes.orderButton}
        startIcon={<SwapHorizIcon style={{ fontSize: "30px" }} />}
        onClick={() => history.push("/changepassword")}
      >
        Change Password
      </Button>
    </Grid>
  );
};

export default LeftSideBar;
