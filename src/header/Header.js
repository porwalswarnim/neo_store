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
import { useLocation } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import PopoverPopupState from "./popover";
import { useHistory } from "react-router-dom";
import PopoverPopupStateLogout from "./PopoverLogout";
import { POPOVER_CONSTANTS } from "./headerUtils";
import { useStyles } from "./headerStyles";
import { useSelector } from "react-redux";

const Header = (props) => {
  const classes = useStyles(props);
  const history = useHistory();
  const location = useLocation();
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
            {POPOVER_CONSTANTS.includes(location.pathname) ? (
              <PopoverPopupState />
            ) : (
              <PopoverPopupStateLogout />
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
