import React from "react";

//import "../css/Waiter.css";
import glass from "../assets/glass.png";  
import welcome from "../assets/welcome.png";

export default function Waiter() {
  return (
    <div className="waiter">
      <h1>Devenir serveur</h1>
      <p style={{fontSize: "1.35em"}}>Tu veux vivre le cabaret differement ?</p>
      <p style={{marginBottom: "1em", fontSize: "1.35em"}}>Tu as raté le shotgun et tu veux quand même profiter de la soirée ? Tu peux devenir serveur !</p>
      <div style={{margin: "0 auto", width: "250px"}}>
        <a href="https://forms.gle/x31y6v2kKQKr9ETJ7" style={{textDecoration: "none"}}>
          <button class='btn-slack'>
            Devenir serveur
            <img src={glass} alt="Logo serveur" />
          </button>
        </a>
      </div>
    </div>
  );
};