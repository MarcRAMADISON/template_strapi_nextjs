import { CSSProperties } from "react";
import Image from "next/image";
import style from "./detailCm.module.css";
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
    backgroundColor: "#000",
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
        <title>JDA Diffusion - Service de gestion de réseaux sociaux</title>
        <meta
          name="keywords"
          content="JDA Diffusion, community manager, réseau sociaux, relation, relation client, communication, tik-tok, facebook, instagram, linkedin"
        />
        <meta property="og:url" content="https://jdadiffusion.com" />
        <meta
          property="og:title"
          content="JDA Diffusion - Service de gestion de réseaux sociaux"
        />
        <meta
          property="og:description"
          content="Page de détail du service de gestion de réseaux sociaux, relation clients, community manager."
        />
        <meta
          name="description"
          content="Page de détail du service de gestion de réseaux sociaux, relation clients, community manager."
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
            <span className={style.title}>Gestion des réseaux sociaux</span>
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
                Création de contenu engageant : des visuels attractifs et des
                textes percutants pour capter l&apos;attention de votre auditeur
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
                Calendrier éditorial : Une planification efficace pour publier
                régulièrement et maximiser votre impact.
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
                Optimiser mon budget publicitaire pour un maximum de résultats.
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
                Publicités ciblées : campagnes sponsorisées pour toucher
                directement vos clients potentiels.
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
                Animation de communauté : Réponses aux commentaires, gestion des
                messages et fidélisation de votre audience.
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
                Analyse des performances : suivi des résultats pour ajuster les
                stratégies et atteindre vos objectifs.
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
            src="/assets/images/cm_illustration.png"
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
