import {
  Button,
  Typography,
  Grid,
  AppBar,
  Toolbar,
  Paper,
  InputBase,
  IconButton,
} from "@material-ui/core";
import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import PopoverPopupState from "./popover";
import { useHistory } from "react-router-dom";
import PopoverPopupStateLogout from "./PopoverLogout";
import { useDispatch } from "react-redux";
import { POPOVER_CONSTANTS } from "./headerUtils";
import { useStyles } from "./headerStyles";
import { useSelector } from "react-redux";

const Header = (props) => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const id = isLoggedIn?.id;
  const loggedIn = isLoggedIn.filter((ele) => ele.length === id)[0];
  const classes = useStyles(props);
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const { products = [] } = useSelector((state) => state.cardData);
  return (
    <AppBar position="static" className={classes.headerFeedback}>
      <Toolbar>
        <Grid container>
          <Grid item container row xs>
            <Typography
              className={classes.companyName}
              onClick={() => history.push("/home")}
            >
              Neo
              <span
                style={{ color: "red" }}
                onClick={() => history.push("/home")}
              >
                STORE
              </span>
            </Typography>
            <Button
              className={classes.buttonHome}
              type="button"
              variant="contained"
              onClick={() => history.push("/home")}
            >
              Home
            </Button>
            <Button
              className={classes.buttonProducts}
              type="button"
              variant="contained"
              onClick={() => history.push("/productmodule")}
            >
              Products
            </Button>
            <Button
              className={classes.buttonOrders}
              type="button"
              variant="contained"
              onClick={() => history.push("/ordermodule")}
            >
              Orders
            </Button>
            <Paper component="form" className={classes.searchBox}>
              <IconButton>
                <SearchIcon />
              </IconButton>
              <InputBase
                className={classes.inputSearchBox}
                placeholder="Search.."
                type="text"
               
                onChange={(event) => {
                  const setSearchTerm = event.target.value;
                  dispatch({
                    type: "IS_SEARCHING",
                    payload: setSearchTerm,
                  });
                }}
              />
            </Paper>
            <Button
              variant="contained"
              className={classes.cartBox}
              startIcon={<ShoppingCartIcon />}
              onClick={() => history.push("/AddCartItems")}
            >
              {" "}
              Cart &nbsp;
              {products.length === 0 ? "" : products.length}
            </Button>
            {loggedIn ? <PopoverPopupStateLogout /> : <PopoverPopupState />}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
