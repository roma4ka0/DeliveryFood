import React from "react";

import Header from "../Components/Header/Header";
import RestarauntMain from "../Components/Restaraunt/Main/RestarauntMain";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <RestarauntMain />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
