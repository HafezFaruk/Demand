import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs.js";
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home.js";
import ChangePassword from "./components/MyAccount/ChangePassword.js";
import Checkout from "./components/MyAccount/Checkout.js";
import Faq from "./components/MyAccount/Faq.js";
import ForgotPassword from "./components/MyAccount/ForgotPassword.js";
import Login from "./components/MyAccount/Login.js";
import ManageAddress from "./components/MyAccount/ManageAddress.js";
import ManageMyAccount from "./components/MyAccount/ManageMyAccount.js";
import MyOrderHistory from "./components/MyAccount/MyOrderHistory.js";
import MyReturns from "./components/MyAccount/MyReturns.js";
import MyReviews from "./components/MyAccount/MyReviews.js";
import MyVaucher from "./components/MyAccount/MyVaucher.js";
import NotFound from "./components/MyAccount/NotFound.js";
import OrderCancel from "./components/MyAccount/OrderCancel.js";
import OrderComplete from "./components/MyAccount/OrderComplete.js";
import Payment from "./components/MyAccount/Payment.js";
import PaymentEdit from "./components/MyAccount/PaymentEdit";
import PaymentsMethods from "./components/MyAccount/PaymentsMethods.js";
import ProfileInformation from "./components/MyAccount/ProfileInformation.js";
import Register from "./components/MyAccount/Register.js";
import Timeline from "./components/MyAccount/Timeline.js";
import Wishlist from "./components/MyAccount/Wishlist.js";
import Navbar from "./components/NavigationBar/Navbar.js";
import ProductDetails from "./components/Shop/ProductDetails.js";
import ShopGridView from "./components/Shop/ShopGridView.js";
import ShopListView from "./components/Shop/ShopListView.js";
import ShoppingCart from "./components/Shop/ShoppingCart.js";
import ReturnOrderDetails from "./components/MyAccount/ReturnOrderDetails.js";
import OrderHistoryDetails from "./components/MyAccount/OrderHistoryDetails.js";
import ReviewsDetails from "./components/MyAccount/ReviewsDetails.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/contact" index element={<Contact />} />
          <Route path="/aboutUs" index element={<AboutUs />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orderComplete" element={<OrderComplete />} />
          <Route path="/myAccount" element={<ManageMyAccount />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shopListView" element={<ShopListView />} />
          <Route path="/shopGridView" element={<ShopGridView />} />
          <Route path="/shoppingCart" element={<ShoppingCart />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route
            path="myAccount/profileInformation"
            element={<ProfileInformation />}
          />
          <Route path="myAccount/manageAddress" element={<ManageAddress />} />
          <Route path="myAccount/changePassword" element={<ChangePassword />} />
          <Route path="myAccount/myOrderHistory" element={<MyOrderHistory />} />
          <Route path="myAccount/wishlist" element={<Wishlist />} />
          <Route path="myAccount/returnOrder" element={<MyReturns />} />
          <Route path="myAccount/orderCancel" element={<OrderCancel />} />
          <Route path="myAccount/myReviews" element={<MyReviews />} />
          <Route path="myAccount/myVaucher" element={<MyVaucher />} />
          <Route path="myAccount/reviewsDetails" element={<ReviewsDetails />} />
          <Route
            path="myAccount/orderDetails"
            element={<OrderHistoryDetails />}
          />
          <Route
            path="myAccount/returnOrderDetails"
            element={<ReturnOrderDetails />}
          />
          <Route path="myAccount/paymentEdit" element={<PaymentEdit />} />
          <Route
            path="myAccount/paymentsMethods"
            element={<PaymentsMethods />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
