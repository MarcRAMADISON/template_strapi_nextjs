import { CSSProperties } from "react";
import Image from "next/image";
import style from "./detailDw.module.css";
import { useRouter } from "next/router";
import Animation from "../components/animation";
import Head from "next/head";

function DetailCm() {
  const route = useRouter();

  const styling: CSSProperties = {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundImage: `url('/assets/images/detailBg.jpg')`,
    width: "100%",
    maxWidth: "1920px",
    height: "fit-content",
    maxHeight: "1080px",
    backgroundRepeat: "no-repeat",
    placeSelf: "center",
    position: "relative",
  };

  return (
    <>
      <Head>
        <title>JDA Diffusion - Service de développement web</title>
        <meta
          name="keywords"
          content="JDA Diffusion, site vitrine, développement web, plateforme web, site de réservation, création, web, internet, intranet, informatique, numérique, plateforme"
        />
        <meta property="og:url" content="https://jdadiffusion.com" />
        <meta
          property="og:title"
          content="JDA Diffusion - Service de développement web"
        />
        <meta
          property="og:description"
          content="Page de détail du service de développement web, réferencement SEO, Optimisation web, plateforme numérique."
        />
        <meta
          name="description"
          content="Page de détail du service de développement web, réferencement SEO, Optimisation web, plateforme numérique."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div style={styling}>
        <div className={style.textBlock}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className={style.blueDote}></div>
            <span className={style.title}>Création de sites sur mesure</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "60px 0px 0px 60px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className={style.whiteDote}></div>
              <span className={style.text}>
                Design unique : un site qui reflète votre entreprise, adapté à
                votre secteur et à vos besoins spécifiques.
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "30px",
              }}
            >
              <div className={style.whiteDote}></div>
              <span className={style.text}>
                Navigation optimisée : une expérience utilisateur fluide pour
                garder vos visiteurs engagés.
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "30px",
              }}
            >
              <div className={style.whiteDote}></div>
              <span className={style.text}>
                Référencement optimisé (SEO) : des pages conçues pour être
                visibles sur Google et attirer un trafic de qualité.
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "30px",
              }}
            >
              <div className={style.whiteDote}></div>
              <span className={style.text}>
                Fonctionnalités personnalisées : réservation en ligne, boutique
                e-commerce, formulaires interactifs, et bien plus encore.
              </span>
            </div>
            <div
              className={style.textContainer}
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "30px",
              }}
            >
              <div className={style.whiteDote}></div>
              <span className={style.text}>
                Boostez votre activité avec nos services sur mesure : création
                de sites web performants et gestion efficace des réseaux sociaux
                pour maximiser votre visibilité et votre impact.
              </span>
            </div>
          </div>
        </div>

        <button className={style.backButton} onClick={() => route.push("/")}>
          Retour
        </button>
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
            position: "relative",
            width: "100vw",
            height: "100vh",
            maxHeight: "1080px",
          }}
          className={style.imageDetail}
        >
          <Image
            src="/assets/images/dw_illustration.png"
            alt="community manager illustration"
            layout="fill"
            objectFit="contain"
            objectPosition="100%"
          />
        </Animation>
      </div>
    </>
  );
}

export default DetailCm;
