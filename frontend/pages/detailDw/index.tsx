import { CSSProperties } from "react";
import Image from "next/image";
import style from "./detailDw.module.css";
import { useRouter } from "next/router";
import Animation from "../components/animation";
import Head from "next/head";
import { NextSeo } from "next-seo";

function DetailCm() {
  const route = useRouter();

  const styling: CSSProperties = {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundImage: `url('/assets/images/detailBg.jpg')`,
    width: "100%",
    maxWidth: "1920px",
    height: "100%",
    minHeight:"100vh",
    backgroundSize:"cover",
    placeSelf: "center",
    position: "relative",
  };

  return (
    <>
      <NextSeo
            title="JDA Diffusion - Service de développement web"
            description="Page de détail du service de développement web, réferencement SEO, Optimisation web, plateforme numérique."
            canonical="https://jdadiffusion.fr/detailDw"
            openGraph={{
                type: 'Détail développeur web',
                url: 'https://jdadiffusion.fr/detailDw',
                site_name: 'Détail Développeur web'
            }}
        />
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
            className={style.block}
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
            width: "80vw",
            height: "80vh",
            marginTop:"10vh"
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
