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
import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import PopoverPopupState from "./popover";
import { useHistory } from "react-router-dom";
import PopoverPopupStateLogout from "./PopoverLogout";
import { useDispatch } from "react-redux";
import { useStyles } from "./headerStyles";
import { useSelector } from "react-redux";
import { IS_SEARCHING } from "../types";

/**
 * @author Swarnim Porwal
 * @description this method contains Header for a whole project
 * @returns JSX for Headers
 */

const Header = (props) => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const id = isLoggedIn?.id;
  const loggedIn = isLoggedIn.filter((ele) => ele.length === id)[0];
  const classes = useStyles(props);
  const history = useHistory();
  const dispatch = useDispatch();
  const { products = [] } = useSelector((state) => state.cardData);
  return (
    <div>
      <AppBar position="static" className={classes.headerFeedback}>
      <Toolbar>
          <Grid container>
            <Grid item xs={12} lg={3} md={2} sm={3}>
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
            </Grid>
            <Grid item xs={4} lg={1} md={1} sm={3} container justify="center">
              <Button
                className={classes.btn}
                type="button"
                variant="contained"
                onClick={() => history.push("/home")}
              >
                Home
              </Button>
            </Grid>
            <Grid item xs={4} lg={1} md={1} sm={3} container justify="center">
              <Button
                className={classes.btn}
                type="button"
                variant="contained"
                onClick={() => history.push("/productmodule")}
              >
                Products
              </Button>
            </Grid>

            <Grid item xs={4} lg={1} md={1} sm={3} container justify="center">
              <Button
                className={classes.btn}
                type="button"
                variant="contained"
                onClick={() => history.push("/ordermodule")}
              >
                Orders
              </Button>
            </Grid>
            <Grid item xs={12} lg={3} md={4} sm={4} container justify="center">
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
                      type: IS_SEARCHING,
                      payload: setSearchTerm,
                    });
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={6} lg={2} md={2} sm={4} container justify="center">
              <Button
                variant="contained"
                className={classes.cartBox}
                startIcon={<ShoppingCartIcon style={{fontSize:'40px'}} />}
                onClick={() => history.push("/AddCartItems")}
              >
                {" "}
                &nbsp; Cart &nbsp;
                {products.length === 0 ? "" : products.length}
              </Button>
            </Grid>
            <Grid item xs={6} lg={1} md={1} sm={4}>
              {loggedIn ? <PopoverPopupStateLogout /> : <PopoverPopupState />}
            </Grid>
          </Grid>
          </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
