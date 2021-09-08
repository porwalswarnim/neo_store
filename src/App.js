import HomePage from "./homepage/HomePage";
import LoginPage from "./loginPage/LoginPage";
import RegistrationScreen from "./registeration/RegistrationPage";
import ForgotScreen from "./forgotPassword/ForgotPassword";
import ProductModule from "./productModule/ProductModule";
import OrderModule from "./myaccount/order";
import ChangePassword from "./myaccount/ChangePassword";
import ProfilePage from "./myaccount/profile";
import AddAddress from "./myaccount/AddAddress";
import AddNewAddress from "./myaccount/AddNewAddress";
import EditAddress from "./myaccount/EditAddress";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import ProductDetailModule from "./productDetailModule/ProductDetailModule";
import AddCartItems from "./addCartItems/AddCartItems";
import SuccessSnackbar from "./commons/snackbar/SnackBarComponent";
import BackdropComponent from "./commons/snackbar/BackdropComponent";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import InvoiceShow from "./InvoicePDF/InvoiceOrderBill";
import ConfirmationBox from "./commons/snackbar/ConfirmationBox";

function App() {
  return (
    <div>
      <SuccessSnackbar />
      <BackdropComponent />
      <ConfirmationBox />
      <Router>
        <Header />
        <div style={{ minHeight: "60vh" }}>
          <Route exact path="/" component={() => <Redirect to="/home" />} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/registration" component={RegistrationScreen} />
          <Route exact path="/forgotpassword" component={ForgotScreen} />
          <Route exact path="/productmodule" component={ProductModule} />
          <PrivateRoute
            exact
            path="/productmodule/:name/:id"
            component={ProductModule}
          />
          <PrivateRoute
            exact
            path="/productdetailmodule/:id"
            component={ProductDetailModule}
          />
          <PrivateRoute exact path="/ordermodule" component={OrderModule} />
          <PrivateRoute exact path="/ordermodule/:id" component={InvoiceShow} />
          <PrivateRoute
            exact
            path="/changepassword"
            component={ChangePassword}
          />
          <PrivateRoute exact path="/profilepage" component={ProfilePage} />
          <PrivateRoute exact path="/addAddress" component={AddAddress} />
          <PrivateRoute exact path="/addNewAddress" component={AddNewAddress} />
          <PrivateRoute exact path="/editAddress/:id" component={EditAddress} />
          <PrivateRoute exact path="/AddCartItems" component={AddCartItems} />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
