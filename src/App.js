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
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link,
} from "react-router-dom";
import ProductDetailModule from "./productDetailModule/ProductDetailModule";
import AddCartItems from "./addCartItems/AddCartItems";
import SuccessSnackbar from "./commons/snackbar/SnackBarComponent";
import BackdropComponent from "./commons/snackbar/BackdropComponent";
import Header from "./header/Header";
import Footer from "./footer/Footer";
function App() {
  return (
    <div>
      <SuccessSnackbar />
      <BackdropComponent />
      <Router>
        <Header />
        <div style={{minHeight:'60vh'}}>
          <Route exact path="/" component={() => <Redirect to="/home" />} />
          <Link to="/home"></Link>
          <Link to="/login"></Link>
          <Link to="/registration"></Link>
          <Link to="/forgotpassword"></Link>
          <Link to="/productmodule"></Link>
          <Link to="/productmodule/:id"></Link>
          <Link to="/productdetailmodule"></Link>
          <Link to="/ordermodule"></Link>
          <Link to="/changepassword"></Link>
          <Link to="/profilepage"></Link>
          <Link to="/addAddress"></Link>
          <Link to="/addNewAddress"></Link>
          <Link to="/editAddress"></Link>
          <Link to="/AddCartItems"></Link>

          <Route exact path="/home" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/registration" component={RegistrationScreen} />
          <Route exact path="/forgotpassword" component={ForgotScreen} />
          <PrivateRoute exact path="/productmodule" component={ProductModule} />
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
