import React from "react";
import { Footer, Header, ProductSection } from "../../components";

const Homepage = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="main">
        <Header />
        <ProductSection />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
