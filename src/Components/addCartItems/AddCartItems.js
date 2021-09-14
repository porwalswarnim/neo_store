import { Grid, Box, Typography } from "@material-ui/core";
import { useStyles } from "./addCartStyles";
import React, { useState } from "react";
import Items from "./Items";
import ReviewOrderTotal from "./ReviewOrderTotal";
import HeaderItems from "./HeaderItems";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../../assets/types";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Button } from "@material-ui/core";
import { IS_LOADING,SHOW_SNACKBAR } from "../../assets/types";
/**
 * @author Swarnim Porwal
 * @description this function gets all the data and put them into the card
 * this method contains 3 methods :
 * incre() :  increase the quantity
 * decre() : decrease the quantity
 * deleteProduct() : to delete the product from the cart
 * @param {props} it takes cart data object as props
 * @returns JSX for cart card screen
 */

export const fetchCartData = async (dispatch) => {
  const config = {
    method: "get",
    url: "https://neostore-api.herokuapp.com/api/cart",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };
  try {
    dispatch({
      type: IS_LOADING,
      payload: true,
    });
    const res = await axios(config);
    dispatch({
      type: IS_LOADING,
      payload: false,
    });
    const cart = res?.data?.data;
    dispatch({
      type: ADD_TO_CART,
      payload: cart,
    });
  } catch (err) {}
};

const AddCartItems = (props) => {
  const classes = useStyles(props);
  const history = useHistory();
  const { products = [], grandTotal = 0 } = useSelector(
    (state) => state.cardData
  );
 
var retrievedData = localStorage.getItem("address");
const addAddress = JSON.parse(retrievedData);

  const dispatch = useDispatch();
  const [selectAddress, setSelectAddress] = useState({
    address: addAddress[0],
    name: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    setSelectAddress({
      ...selectAddress,
      [name]: e.target.value,
    });
  };
  const ProceedToBuyHandler = async (e) => {
    var data = {
      addressId: selectAddress.address,
    };

    var config = {
      method: "post",
      url: "https://neostore-api.herokuapp.com/api/order/place",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      data,
    };

    try {
      var res = await axios(config);
      const message = "Ordered Placed Successfully";
      dispatch({
        type: SHOW_SNACKBAR,
        payload: { type: "success", message, open: true },
      });
      history.push("/ordermodule");
    } catch (res) {
      const message = "No item in cart";
      dispatch({
        type: SHOW_SNACKBAR,
        payload: { type: "error", message, open: true },
      });
    }
  };

  useEffect(() => {
    fetchCartData(dispatch);
  }, []);

  return (
    <Grid>
      <Grid className={classes.mainGrid}>
        <Grid item container row xs={12}>
          {products?.length === 0 && (
            <Grid
              item
              xs={7}
              container
              className={classes.leftSideGrid}
              justify="center"
              alignItems="center"
            >
              <Typography
                style={{
                  fontSize: "80px",
                  fontWeight: "bold",
                }}
              >
                No Item is Added In Cart
              </Typography>
            </Grid>
          )}
          {products?.length !== 0 && (
            <Grid item  xs={7} className={classes.leftSideGrid}>
              <Box boxShadow={8}>
                <HeaderItems />
                {products.map((ele, i) => {
                  return (
                    <Box style={{ marginTop: "10px" }} boxShadow={5}>
                      <Items
                        data={ele}
                        key={ele.id}
                        fetchCartData={fetchCartData}
                      />
                    </Box>
                  );
                })}
              </Box>
            </Grid>
          )}
          <Grid item xs={4} className={classes.rightSideGrid}>
            <FormControl
              variant="outlined"
              style={{ backgroundColor: "#f9f9f9" }}
              autoComplete="off"
            >
              <InputLabel
                // htmlFor="outlined-address-native-simple"
                style={{ fontSize: "20px", color: "black", fontWeight: "bold" }}
              >
                Address
              </InputLabel>
              <Select
                native
                value={selectAddress.address}
                onChange={handleChange}
                label="Address"
                style={{ width: "570px" }}
                inputProps={{
                  name: "address",
                  id: "outlined-age-native-simple",
                }}
              >
                {addAddress.map((ele) => (
                  <option value={ele._id}>
                    {ele.addressLine}, &nbsp;
                    {ele.city} - &nbsp;
                    {ele.pincode} &nbsp;
                    {ele.state}&nbsp; ({ele.country})
                  </option>
                ))}
              </Select>
            </FormControl>
            <Button
              variant="contained"
              className={classes.addAddressCSS}
              onClick={() => history.push("/addNewAddress")}
            >
              Add New Address
            </Button>
            <Box boxShadow={8}>
              <ReviewOrderTotal total={grandTotal} />
              <Button
                variant="contained"
                color="primary"
                className={classes.buttonInvoiceDownload}
                onClick={ProceedToBuyHandler}
              >
                Proceed to buy
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddCartItems;
