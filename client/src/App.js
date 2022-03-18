import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs.js";
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home.js";
import ManageMyAccount from "./components/MyAccount/ManageMyAccount.js";
import NavigationBar from "./components/NavigationBar/NavigationBar.js";

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
          <Route path="/myAccount" element={<ManageMyAccount />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
