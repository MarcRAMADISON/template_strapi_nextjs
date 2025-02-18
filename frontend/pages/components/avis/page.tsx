"use client";

import style from "./avis.module.css";
import { CSSProperties } from "react";
import Image from "next/image";

const avisList = [
  {
    name: "MZO CONTACT CENTER",
    avatarUrl: "/assets/images/logo_mzo.png",
    description:
      "Grâce à JDA Diffusion, je peux me concentrer sur mon cœur de métier sans me soucier de ma communication. Ils s’occupent de tout et le font à la perfection. Je suis ravie des résultats.",
  },
  {
    name: "Oasis des Grands Pins",
    avatarUrl: "/assets/images/logo_grands_pins.jpg",
    description:
      "Un immense merci à JDA Diffusion pour leur expertise et leur accompagnement ! Grâce à leurs conseils stratégiques et leur approche personnalisée, mes ventes ont connu un vrai coup de boost. Leur professionnalisme, leur écoute et leurs solutions sur-mesure font toute la différence. Je recommande à 100 % pour tous ceux qui veulent optimiser leur performance commerciale !",
  },
  {
    name: "Sonia Chabert",
    avatarUrl: "/assets/images/avatar1.jpg",
    description:
      "En tant que propriétaire d’un salon de coiffure, j’avais besoin d’aide pour ma communication digitale. L’équipe de JDA Diffusion a su mettre en valeur mon activité avec des visuels modernes et une stratégie parfaitement adaptée à ma clientèle. Un service au top !",
  }
];

const styling: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  backgroundImage: `url('/assets/images/servicesBg.jpg')`,
  height: "fit-content",
  minHeight: "860px",
};

function Avis() {

 
  return (
    <div style={styling} id="avis">
      <span className={style.title}>Ce que disent nos clients sur nous :</span>
      <div className={style.horizontalScroll}>
        {avisList.map((avis: any, index: number) => {
          return (
            <div key={index} className={style.cardContainer}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                <Image
                  className={style.avatar}
                  src={avis.avatarUrl}
                  width={50}
                  height={50}
                  alt="avatar"
                />
                <span
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    marginLeft: "20px",
                  }}
                >
                  {avis.name}
                </span>
              </div>
              <div className={style.blockquote}>
                <p className={style.citation}>{avis.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Avis;
