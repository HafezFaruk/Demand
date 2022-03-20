import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs.js";
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home.js";
import Checkout from "./components/MyAccount/Checkout.js";
import ManageMyAccount from "./components/MyAccount/ManageMyAccount.js";
import NotFound from "./components/MyAccount/NotFound.js";
import OrderComplete from "./components/MyAccount/OrderComplete.js";
import Payment from "./components/MyAccount/Payment.js";
import Timeline from "./components/MyAccount/Timeline.js";
import NavigationBar from "./components/NavigationBar/NavigationBar.js";
import MyAccountSidebar from "./components/MyAccount/MyAccountSidebar.js";
import ProfileInformation from "./components/MyAccount/ProfileInformation.js";
import ChangePassword from "./components/MyAccount/ChangePassword.js";
import Asrafull from "./components/MyAccount/Asrafull.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <NavigationBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/contact" index element={<Contact />} />
          <Route path="/aboutUs" index element={<AboutUs />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orderComplete" element={<OrderComplete />} />
          <Route
            path="myAccount/profileInformation"
            element={<Asrafull />}
          />
          <Route path="myAccount" element={<MyAccountSidebar />}>
            <Route path="manageMyAccount" element={<ManageMyAccount />} />
            <Route path="profileInformation" element={<ProfileInformation />} />
            <Route path="changePassword" element={<ChangePassword />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
