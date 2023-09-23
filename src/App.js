import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

import Home from "./Pages/Home.jsx";
import Restaurant from "./Pages/Restaraunt";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <section>
      <Router>
        <Routes>
          <Route path="/DeliveryFood" element={<Home />} />
          <Route path="/DeliveryFood/restaurant" element={<Restaurant />} />
        </Routes>
      </Router>
    </section>
  );
}

export default App;
