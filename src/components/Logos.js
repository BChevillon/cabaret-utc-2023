import React from "react";

import "../css/Logos.css"

import bde from "../assets/logo_bde.png";
import utc from "../assets/logo_utc.png";
import pae from "../assets/logo_pae.png";
import crous from "../assets/logo_crous.jpg";

export default function Logos() {
    return (
        <div className="logos">
            <img src={bde} alt="Logo BDE" />
            <img src={pae} alt="Logo PAE" />
            <img src={utc} alt="Logo UTC" />
            <img src={crous} alt="Logo Crous" />
        </div>
    )
}