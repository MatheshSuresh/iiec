import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// COMMON
import ScrollToTop from "./common/ScrollToTop";
import Footer from "../components/common/Footer";
import HomeScreen from "../screens/HomeScreen";
import ContactUsScreen from "../screens/ContactUsScreen";
import SecondaryFooter from "./common/SecondaryFooter"; //Secondary Footer in Sign and Signup screen so that signin and signup have short listed footer
// import ProductScreen from "../screens/ProductScreenDepricated";

//Product Related Screens
import ProductScreen from "../screens/ProductScreen";
import MainHeader from "./MainHeader";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import ProductDetailSampleScreen from "../screens/ProductDetailSampleScreen";
//CART RELATED SCREEN
import CartScreen from "../screens/CartScreen";
import CheckoutLogin from "../screens/CheckoutLogin";
import CheckoutShipping from "../screens/CheckoutShipping";
import CheckoutPlaceOrder from "../screens/CheckoutPlaceOrder";

// Order RELATED SCREEN
import OrderScreen from "../screens/OrderScreen";
// Login/Signup Screen
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";

// USER PROFILE SCREEN
import ProfileScreen from "../screens/ProfileScreen";
import UserOrderListScreen from "../screens/UserOrderListScreen";

// Admin Screens
import AdminHomePage from "../components/AdminDashboard/pages/HomePage.jsx";
import CreateUser from "../components/AdminDashboard/pages/users/CreateUser.jsx";
import ProductList from "../components/AdminDashboard/pages/products/ProductList.jsx";
import UserDetails from "../components/AdminDashboard/pages/users/UserDetails.jsx";
import UserList from "../components/AdminDashboard/pages/users/UserList.jsx";
import Sidebar from "../components/AdminDashboard/Sidebar.jsx";
import Topbar from "../components/AdminDashboard/Topbar.jsx";
import "../components/styles/AdminScreen.css";
import ProductDetails from "./AdminDashboard/pages/products/AdminProductEdit.jsx";
import CreateProduct from "./AdminDashboard/pages/products/CreateProduct";
import CheckoutPayment from "../screens/CheckoutPayment";
import ImageMagnify from "./magnify-image/ImageMagnify";
import OrderList from "./AdminDashboard/pages/orders/OrderList";
import OrderDetails from "./AdminDashboard/pages/orders/AdminOrderDetails";
import TrackOrderScreen from "../screens/TrackOrderScreen";
import LeadGeneration from './AdminDashboard/pages/lead/LeadGeneration';



function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <main>
          {/* <Switch>
            <MainHeader exact path='/'>
              <Footer exact path='/'>
                <Route component={HomeScreen} path='/' exact></Route>
              </Footer>
            </MainHeader>
          </Switch>
          <Switch>
            <MainHeader exact path='/product'>
              <Route
                component={ProductDetailSampleScreen}
                path='/product'
                exact
              ></Route>
            </MainHeader>
          </Switch>
          <Switch>
            <SecondaryFooter path='/sign-in' exact>
              <Route component={SignIn} path='/sign-in' exact></Route>
            </SecondaryFooter>
          </Switch>
          <Switch>
            <SecondaryFooter path='/sign-up' exact>
              <Route component={SignUp} path='/sign-up' exact></Route>
            </SecondaryFooter>
          </Switch>
          <Switch>
            <MainHeader path='/shop' exact>
              <Footer path='/shop' exact>
                <Route component={ProductScreen} path='/shop' exact></Route>
              </Footer>
            </MainHeader>
          </Switch>
          <Switch>
            <MainHeader path='/shop/search/:keyword' exact>
              <Footer path='/shop/search/:keyword' exact>
                <Route
                  component={ProductScreen}
                  path='/shop/search/:keyword'
                  exact
                ></Route>
              </Footer>
            </MainHeader>
          </Switch>
          <Switch>
            <MainHeader path='/search/:category' exact>
              <Footer path='/search/:category' exact>
                <Route
                  component={ProductScreen}
                  path='/search/:category'
                  exact
                ></Route>
              </Footer>
            </MainHeader>
          </Switch>
          <Switch>
            <MainHeader path='/shop/:id' exact>
              <Footer path='/shop/:id' exact>
                <Route
                  component={ProductDetailScreen}
                  path='/shop/:id'
                  exact
                ></Route>
              </Footer>
            </MainHeader>
          </Switch>
          <Switch>
            <MainHeader path='/cart' exact>
              <div style={{background: "#f4f4f4"}}>
                <Footer path='/cart' exact>
                  <Route component={CartScreen} path='/cart' exact></Route>
                </Footer>
              </div>
            </MainHeader>
          </Switch>
          <Switch>
            <MainHeader path='/checkout-login' exact>
              <div style={{background: "#f4f4f4"}}>
                <Footer path='/checkout-login' exact>
                  <Route
                    component={CheckoutLogin}
                    path='/checkout-login'
                    exact
                  ></Route>
                </Footer>
              </div>
            </MainHeader>
          </Switch>
          <Switch>
            <MainHeader path='/checkout-shipping' exact>
              <div style={{background: "#f4f4f4"}}>
                <Footer path='/checkout-shipping' exact>
                  <Route
                    component={CheckoutShipping}
                    path='/checkout-shipping'
                    exact
                  ></Route>
                </Footer>
              </div>
            </MainHeader>
          </Switch>
          <Switch>
            <MainHeader path='/checkout-payment' exact>
              <div style={{background: "#f4f4f4"}}>
                <Footer path='/checkout-payment' exact>
                  <Route
                    component={CheckoutPayment}
                    path='/checkout-payment'
                    exact
                  ></Route>
                </Footer>
              </div>
            </MainHeader>
          </Switch>
          <Switch>
            <MainHeader path='/checkout-placeorder' exact>
              <div style={{background: "#f4f4f4"}}>
                <Footer path='/checkout-placeorder' exact>
                  <Route
                    component={CheckoutPlaceOrder}
                    path='/checkout-placeorder'
                    exact
                  ></Route>
                </Footer>
              </div>
            </MainHeader>
          </Switch>

          <Switch>
            <MainHeader path='/magnify' exact>
              <div style={{background: "#f4f4f4"}}>
                <Footer path='/magnify' exact>
                  <Route component={ImageMagnify} path='/magnify' exact></Route>
                </Footer>
              </div>
            </MainHeader>
          </Switch>

          <Switch>
            <MainHeader path='/profile/order/:id' exact>
              <div style={{background: "#F4F5F7"}}>
                <Footer path='/profile/order/:id' exact>
                  <Route
                    component={OrderScreen}
                    path='/profile/order/:id'
                    exact
                  ></Route>
                </Footer>
              </div>
            </MainHeader>
          </Switch>

          <Switch>
            <MainHeader path='/profile' exact>
              <Footer path='/profile' exact>
                <Route component={ProfileScreen} path='/profile' exact></Route>
              </Footer>
            </MainHeader>
          </Switch>
          <Switch>
            <MainHeader path='/profile/orders' exact>
              <Footer path='/profile/orders' exact>
                <Route
                  component={UserOrderListScreen}
                  path='/profile/orders'
                  exact
                ></Route>
              </Footer>
            </MainHeader>
          </Switch>
          <Switch>
            <MainHeader path='/profile/track-order' exact>
              <Footer path='/profile/track-order' exact>
                <Route
                  component={TrackOrderScreen}
                  path='/profile/track-order'
                  exact
                ></Route>
              </Footer>
            </MainHeader>
          </Switch>
          <Switch>
            <MainHeader path='/contact-us' exact>
              <Footer path='/contact-us' exact>
                <Route
                  component={ContactUsScreen}
                  path='/contact-us'
                  exact
                ></Route>
              </Footer>
            </MainHeader>
          </Switch> */}
          {/* <Route component={DemoScreen} path='/demo' exact></Route> */}
        </main>
        {/* <Route component={AdminScreen} path='/admin' exact></Route> */}
        <Switch>
          <SecondaryFooter path='/' exact>
            <Route component={SignIn} path='/' exact></Route>
          </SecondaryFooter>
        </Switch>
        <Switch>
          <SecondaryFooter path='/sign-up' exact>
            <Route component={SignUp} path='/sign-up' exact></Route>
          </SecondaryFooter>
        </Switch>
        <Switch>
          <Route path='/admin' exact>
            <Topbar />
            <div className='admin_container'>
              <Sidebar />
              <AdminHomePage />
            </div>
          </Route>
          <Route path='/admin/users' exact>
            <Topbar />
            <div className='admin_container'>
              <Sidebar />
              <UserList />
            </div>
          </Route>
          <Route path='/admin/create-user' exact>
            <Topbar />
            <div className='admin_container'>
              <Sidebar />
              <CreateUser />
            </div>
          </Route>
          <Route path='/admin/product-list' exact>
            <Topbar />
            <div className='admin_container'>
              <Sidebar />
              <ProductList />
            </div>
          </Route>
          <Route path='/admin/product-list/:id' exact>
            <Topbar />
            <div className='admin_container'>
              <Sidebar />
              <ProductDetails />
            </div>
          </Route>
          <Route path='/admin/create-product' exact>
            <Topbar />
            <div className='admin_container'>
              <Sidebar />
              <CreateProduct />
            </div>
          </Route>
          <Route path='/admin/users/:id' exact>
            <Topbar />
            <div className='admin_container'>
              <Sidebar />
              <UserDetails />
            </div>
          </Route>
        </Switch>
        <Switch>
          <Route path='/admin/order-list' exact>
            <Topbar />
            <div className='admin_container'>
              <Sidebar />
              <OrderList />
            </div>
          </Route>
        </Switch>
        <Switch>
          <Route path='/admin/order-list/:id' exact>
            <Topbar />
            <div className='admin_container'>
              <Sidebar />
              <OrderDetails />
            </div>
          </Route>
        </Switch>
        <Switch>
          <Route path='/admin/lead-gen' exact>
            <Topbar />
            <div className='admin_container'>
              <Sidebar />
              <LeadGeneration />
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
