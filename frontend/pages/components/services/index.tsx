import { CSSProperties } from "react";
import Image from "next/image";
import style from "./services.module.css";
import { useRouter } from "next/router";
import { handleNavigation } from "../../../utils/utils";
import Animation from "../animation";

function Services() {
  const route = useRouter();
  const styling: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundImage: `url('/assets/images/servicesBg.jpg')`,
    width: "100%",
    height: "fit-content",
    minHeight: "860px",
  };

  return (
    <div id="services" className={style.serviceContainer} style={styling}>
      <div className={style.blockText}>
        <span className={style.title}>Nos services</span>
        <div className={style.cardContainer}>
          <div className={style.card} onClick={() => route.push("/detailCm")}>
            <span className={style.cardTitle}>
              Gestion des réseaux <br />
              sociaux
            </span>
            <div className={style.cardDescription}>
              <span style={{color:"#fff"}}>
                Les réseaux sociaux sont clés pour créer une communauté et
                booster votre notoriété. Jda Diffusion élabore des stratégies
                sur mesure pour vous faire briller sur les plateformes
                incontournables comme Facebook, Instagram, LinkedIn ou Tik Tok
                ....
              </span>
              <div className={style.overlay}>
                <button className={style.buttonDetail}>Voir détail</button>
              </div>
            </div>
            <button
              className={style.detailAction}
              onClick={() => route.push("/detailCm")}
            >
              Détail
            </button>
          </div>
          <div className={style.card}>
            <span className={style.cardTitle}>
              Création de sites web sur mesure
            </span>
            <div className={style.cardDescription}>
              <span style={{color:"#fff"}}>
                Chez Jda Diffusion, nous savons qu&apos;un site web est bien
                plus qu&apos;une simple vitrine en ligne, un outil puissant pour
                attirer, informer et convertir vos visiteurs en clients.
              </span>
              <div
                className={style.overlay}
                onClick={() => route.push("/detailDw")}
              >
                <button className={style.buttonDetail}>Voir détail</button>
              </div>
            </div>
            <button
              className={style.detailAction}
              onClick={() => route.push("/detailDw")}
            >
              Détail
            </button>
          </div>
        </div>
        <div style={{ marginTop: "50px", width: "90%" }}>
          <span className={style.subTitle}>
            Booster votre activité avec nos services sur mesure : création de
            site web performants et gestion efficace des réseaux sociaux pour
            maximiser votre visibilité et votre impact.
          </span>
        </div>
      </div>
      <Animation
        props={{
          offsreen: {
            x: 200,
            opacity: 0,
          },
          onscreen: {
            x: 0,
            opacity: 1,
          },
        }}
        style={{
          width: "100vw",
          height: "100vh",
          maxHeight: "920px",
          maxWidth: "950px",
          position: "relative",
        }}
        className={style.imageServices}
      >
        <Image
          style={{ position: "absolute" }}
          src="/assets/images/computer.png"
          alt="computer illustration"
          layout="fill"
          objectFit="contain"
          objectPosition="100% 50%"
        />
        <button
          className={style.contactButton}
          onClick={() => handleNavigation("contact")}
        >
          Nous-contacter
        </button>
      </Animation>
    </div>
  );
}

export default Services;
