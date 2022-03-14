import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home.js";

import NavigationBar from "./components/NavigationBar/NavigationBar.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <NavigationBar />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
