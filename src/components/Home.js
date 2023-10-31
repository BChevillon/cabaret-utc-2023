import React from "react";

import "../css/Home.css";

import Logos from "./Logos";
import VideoPlayer from "react-background-video-player";
import Countdown from './Countdown'

import videoSource from "../assets/cabaretA21_extrait.mp4";
import logoTexte from "../assets/logo_texte.png"
//import glass from "../assets/glass.png";
//import dancers from "../assets/dancers.png";



export default function Home() {
  return (
    <div className="home" id="aftermovie">
      <Logos />
      <VideoPlayer
        className="video"
        src={videoSource}
        autoPlay={true}
        muted={true}
        style={{height: "100%"}}
      />
      <div class="presentation" style={{zIndex: "1"}}>
        <img src={logoTexte} alt="Cabaret" id="logo_texte"></img>
        <h1>Rendez-vous le 30 novembre 2023 !</h1>
        <div className="square" >
          <h2>Shotgun le 07/11 à 19h52m30s</h2>
          <Countdown />
        </div>
        {/*
        <div className="square" style={{maxWidth: "1200px"}}>
            <p>Le Cabaret Etudiant vous fait voyager dans les époques au cours d'une soirée très prisée chez les UTCéens.</p>
            <p>Entre un repas gastronomique et des vins minutieusement choisis, vous passerez la soirée en compagnie de vos amis, à profiter de spectacles de danse, chant, et autres performances artistiques.</p>
            <p>Cette soirée n'a lieu qu'une fois dans l'année au semestre d'automne. Que ce soit en tant qu'invité, serveur, membre de l'équipe ou artiste, le cabaret se fera un plaisir de vous accueillir pour cette merveilleuse soirée placée sous le signe de l'élégance !</p>
          </div>
  */}
      </div>
      <div className="video-container" style={{zIndex: "1"}}>
          <iframe
            src="https://www.youtube.com/embed/30HMJW9PaCA?controls=0"
            title="Cabaret 2021"
            allowFullScreen
          ></iframe>
        </div>

        <div className="forms" style={{zIndex: "1"}}>
          {/*
          <a href="">
            <button class='btn-slack'>
              Devenir serveur
              <img src={glass} alt="Logo serveur" />
            </button>
          </a>*/}
          {/*
            <button class='btn-slack' onClick={() => document.location.href='https://docs.google.com/forms/d/e/1FAIpQLSdtiWEHgKzNO2KcxJwdJMKkGXGwQgkbTqtq8i-DfoaCaSnrDg/viewform'}>
                Devenir artiste
                <img src={dancers} alt="Logo serveur" />
            </button>
            */}
        </div>
    </div>
  );
};