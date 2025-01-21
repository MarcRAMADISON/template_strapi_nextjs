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
    name: "Noam Boulanger",
    avatarUrl: "/assets/images/man1.jpg",
    description:
      "JDA Diffusion a complètement transformé la visibilité de mon restaurant en ligne. Grâce à leurs stratégies précises et à leur gestion des réseaux sociaux, mon chiffre d’affaires a bondi en quelques mois. Merci pour votre professionnalisme et votre écoute !",
  },
  {
    name: "Sonia Chabert",
    avatarUrl: "/assets/images/avatar1.jpg",
    description:
      "En tant que propriétaire d’un salon de coiffure, j’avais besoin d’aide pour ma communication digitale. L’équipe de JDA Diffusion a su mettre en valeur mon activité avec des visuels modernes et une stratégie parfaitement adaptée à ma clientèle. Un service au top !",
  },{
    name: "Malik Vaurin",
    avatarUrl: "/assets/images/man2.jpg",
    description:
      "Depuis que JDA Diffusion s’occupe de ma stratégie digitale, je vois une vraie différence. Mon site attire plus de visiteurs et mes publications sur les réseaux sociaux génèrent beaucoup d’interactions. Je ne regrette pas de leur avoir fait confiance.",
  },
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
