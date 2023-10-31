import React from "react";

import "../css/Footer.css";

export default function Footer() {
  return (
    <footer style={{zIndex: "1"}}>
      <div className="credits">
        <span>Resp. info : Benoit CHEVILLON</span>
        <span>Crédits vidéo : Sous Sol Productions</span>
        <span>Contact : <a href="mailto:cabaret@assos.utc.fr">cabaret@assos.utc.fr</a></span>
      </div>
    </footer>
  );
}