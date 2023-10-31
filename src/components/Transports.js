import React from "react";

import "../css/Transports.css";
import welcome from "../assets/welcome.png";

export default function Transports() {
  return (
    <div className="transports">
      <h1>Transports</h1>
        <div class="transportsFlex">
          <div className="square" style={{maxWidth: "1200px"}}>
            <h2>Transport autonome possible</h2>
            <p>Adresse : 786 Rue de Bayencourt, 60490 Ressons-sur-Matz (Centre de Culture et de Loisirs)</p>
            <p>Dernière entrée : 19h45</p>
          </div>
          <div className="square" style={{maxWidth: "1200px"}}>
            <h2>Navettes :</h2>
            <p>Départ et retour à BF uniquement</p>
            <p>Horaires : bientôt !</p>
          </div>
        </div>
    </div>
  );
};