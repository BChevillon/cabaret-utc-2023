import React from "react";
import logo from "../assets/logo.png";

import "../css/Loader.css";

export default function Loader(props) {
  return (
    <div className={props.className}>
      {props.className === "loader" && (
        <img className="loader-logo" src={logo} alt="Logo Cabaret UTC 2023" />
      )}
    </div>
  );
}