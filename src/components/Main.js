import React from "react";

import "../css/Main.css";

import Home from "./Home";
import Event from "./Event";
import Transports from "./Transports"
import Lunch from "./Lunch"
import Waiter from "./Waiter"
import Tables from "./Tables"
import Footer from "./Footer";
import Separateur from "./Separateur";


export default function Main() {
  return (
    <div className="main">
      <Home />
      <Event />
      <Separateur />
      <Lunch />
      <Separateur />
      <Transports />
      <Separateur />
      <Tables />
      <Separateur />
      <Waiter />
      <Separateur />
      <Footer />
    </div>
  );
}
