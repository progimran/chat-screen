import React from "react";
import Header from "../compoents/header";
import Container from "../compoents/container";
import Footer from "../compoents/footer";
import "./index.css";

const Home: React.FC = () => {
  return (
    <div className="Wrapper">
      <div className="header">
        <Header />
      </div>
      <div className="container">
        <Container />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
