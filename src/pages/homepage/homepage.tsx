import React from "react";
import { Footer, Header, ProductSection } from "../../components";

const Homepage = () => {
  return (
    <>
      <Header />
      <div className="main">
        <ProductSection />
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
