import Image from "next/image";
import style from "./about.module.css";
import { CSSProperties } from "react";
import Animation from "../animation";

function About() {
  const styling: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundImage: `url('/assets/images/about.jpg')`,
    backgroundRepeat:'no-repeat',
    width: "100%",
    height: "fit-content",
    maxHeight: "1080px",
    marginTop: "50px",
  };

  return (
    <div id="about" style={styling}>
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
            width: "90%",
            height: "600px",
            position: "relative",
            borderRadius: "50px",
          }}
          className={style.aboutImage}
        >
          <Image
            style={{ zIndex: 999, borderRadius: "5%" }}
            src="/assets/images/illustration_about.jpg"
            alt="illustration about"
            layout="fill"
            objectFit="contain"
          />
        </Animation>

      <Animation
        props={{
          offsreen: {
            x: -200,
            opacity: 0,
          },
          onscreen: {
            x: 0,
            opacity: 1,
          },
        }}
        style={{
          width: "90%",
        }}
        className={style.descriptionBlock}
        animate={false}
      >
          <div style={{ width: "100%" }}>
            <span className={style.descriptionTitle}>
              Transformer vos idées en succès avec Jda diffusion
            </span>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "95%" }}
          >
            <span className={style.descriptionSubTitle}>
              Boostez votre activité et faites le différence avec Jda Diffusion.
              Grâce à nos solutions de marketing digital, nous contribuons à
              accroître directement votre chiffre d&apos;affaire et à atteindre vos
              objectifs. Avec des stratégies digitales adaptées, nous
              accompagnons les entreprises, les entrepreneurs, les commerces et
              bien d&apos;autres vers la réussite.
            </span>
            <div className={style.sloganBlock}>
              <span className={style.sloganItem}>Proximité</span>
              <span className={style.sloganItem}>Créativité</span>
              <span className={style.sloganItem}>Efficacité</span>
            </div>
          </div>
      </Animation>
    </div>
  );
}

export default About;
