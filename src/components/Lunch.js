import React from "react";

import "../css/Lunch.css";
import welcome from "../assets/welcome.png";

export default function Lunch() {
  return (
    <div className="lunch">
      <h1>Le menu</h1>
        <div class="lunchFlex">
          <div className="square" style={{maxWidth: "1200px"}}>
            <h2>Repas non végétarien</h2>
            <p>- Amuses bouches</p>
            <p>- Entrée : Aumonière de légumes</p>
            <p>- Plat : Tournedos de volaille forestier et gratin de patate douce et duo de légumes</p>
            <p>- Plateau de 3 fromages</p>
            <p>- Dessert : Entremets 3 chocolats</p>
          </div>
          <div className="square" style={{maxWidth: "1200px"}}>
            <h2>Repas végétarien</h2>
            <p>- Amuses bouches</p>
            <p>- Entrée : Aumonière de légumes</p>
            <p>- Plat : Courgette à l'italienne et gratin de patate douce et duo de légumes</p>
            <p>- Plateau de 3 fromages</p>
            <p>- Dessert : Entremets 3 chocolats</p>
          </div>
        </div>
        <p style={{marginTop: "2em", fontSize: "1.35em"}}>Des vins et des softs seront offerts, d'autres disponibles à la vente.</p>
    </div>
  );
};