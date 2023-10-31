import React from "react";

import "../css/Separateur.css";
import imgSeparateur from "../assets/separateur.png";

export default function Footer() {
  return (
    <footer style={{zIndex: "1"}}>
      <div className="separateur">
        <img src={imgSeparateur} alt="separateur" />
      </div>
    </footer>
  );
}