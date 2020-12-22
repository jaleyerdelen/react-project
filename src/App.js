import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import DATA_LIST from "./data/data.js";
import Footer from "./components/Footer";
import Card from "./components/Card";

export default function App() {
  const CardComp = DATA_LIST.map((item, index) => (
    <Card
      imgURL={item.imgURL}
      title={item.title}
      secondTitle={item.secondTitle}
      price={item.price}
      key={index}
    />
  ));
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">{CardComp}</div>
      </div>
      <Footer />
    </div>
  );
}

