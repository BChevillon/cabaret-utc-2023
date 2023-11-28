import React from "react";

import "../css/Event.css";
import welcome from "../assets/welcome.png";

export default function Event() {
  return (
    <div className="event">
      <h1>L'évènement</h1>
        <p style={{fontSize: "1.5em"}}>Jeudi 30 novembre, 19h-00h</p>
        <div class="eventFlex">
          <img src={welcome} alt="Bienvenue cabaret" />
          <div className="square" style={{maxWidth: "1200px"}}>
            <p>Entre un repas gastronomique et des vins minutieusement choisis, vous passerez la soirée en compagnie de vos amis, à profiter de spectacles de danse, chant, et autres performances artistiques.</p>
            <p>Que ce soit en tant qu'invité, serveur, membre de l'équipe ou artiste, le cabaret se fera un plaisir de vous accueillir pour cette merveilleuse soirée placée sous le signe de l'élégance !</p>
          </div>
        </div>
        
    </div>
  );
};