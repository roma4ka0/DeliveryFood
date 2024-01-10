import React, { useState } from "react";
import AuthModal from "./Components/AuthModal/AuthModal.jsx";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home.jsx";
import Restaurant from "./Pages/Restaraunt.jsx";

function App() {
  const isLogin = useSelector((state) => state.login.isLogin);
  const [IsOpenAuth, setOpenAuth] = useState(true);

  const closeAuthModal = () => {
    setOpenAuth(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/DeliveryFood" element={<Home />} />
        <Route
          path="/restaurant/:restaurantId"
          element={
            isLogin ? (
              <Restaurant />
            ) : (
              IsOpenAuth &&
              !isLogin && (
                <AuthModal isOpen={IsOpenAuth} onCloseCart={closeAuthModal} />
              )
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
