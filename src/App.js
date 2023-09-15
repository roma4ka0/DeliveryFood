import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

import Home from "./Pages/Home.jsx";
// import Restaurant from "./Restaurant";
// import Cart from "./Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/cart" element={<Cart />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
