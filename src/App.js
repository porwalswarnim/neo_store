import HomePage from "./Components/homepage/HomePage";
import LoginPage from "./Components/loginPage/LoginPage";
import RegistrationScreen from "./Components/registeration/RegistrationPage";
import ForgotScreen from "./Components/forgotPassword/ForgotPassword";
import ProductModule from "./Components/productModule/ProductModule";
import OrderModule from "./Components/myaccount/order";
import ChangePassword from "./Components/myaccount/ChangePassword";
import ProfilePage from "./Components/myaccount/profile";
import AddAddress from "./Components/myaccount/AddAddress";
import AddNewAddress from "./Components/myaccount/AddNewAddress";
import EditAddress from "./Components/myaccount/EditAddress";
import PrivateRoute from "./assets/PrivateRoute";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import ProductDetailModule from "./Components/productDetailModule/ProductDetailModule";
import AddCartItems from "./Components/addCartItems/AddCartItems";
import SuccessSnackbar from "./assets/SnackBarComponent";
import BackdropComponent from "./assets/BackdropComponent";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import Example from "./Components/InvoicePDF/InvoiceOrderBill";
import ConfirmationBox from "./assets/ConfirmationBox";
import ErrorPage from "./assets/ErrorPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAddress } from "./context/store/userReducer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAddress());
  }, [dispatch]);

  return (
    <div>
      <SuccessSnackbar />
      <BackdropComponent />
      <ConfirmationBox />
      <Router>
        <Header />
        <div style={{ minHeight: "60vh" }}>
          <Switch>
            <Route exact path="/" component={() => <Redirect to="/home" />} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/registration" component={RegistrationScreen} />
            <Route exact path="/forgotpassword" component={ForgotScreen} />
            <Route exact path="/productmodule" component={ProductModule} />
            <PrivateRoute
              exact
              path="/productdetailmodule/:id"
              component={ProductDetailModule}
            />
            <PrivateRoute exact path="/ordermodule" component={OrderModule} />
            <PrivateRoute exact path="/ordermodule/:id" component={Example} />
            <PrivateRoute
              exact
              path="/changepassword"
              component={ChangePassword}
            />
            <PrivateRoute exact path="/profilepage" component={ProfilePage} />
            <PrivateRoute exact path="/addAddress" component={AddAddress} />
            <PrivateRoute
              exact
              path="/addNewAddress"
              component={AddNewAddress}
            />
            <PrivateRoute
              exact
              path="/editAddress/:id"
              component={EditAddress}
            />
            <PrivateRoute exact path="/AddCartItems" component={AddCartItems} />
            <Route exact path="*" component={ErrorPage} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
