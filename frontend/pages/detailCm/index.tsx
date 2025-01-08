import { CSSProperties } from "react";
import Image from "next/image";
import style from "./detailCm.module.css";
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
    backgroundColor: "#000",
    width: "100%",
    maxWidth: "1920px",
    height: "100%",
    backgroundSize: "cover",
    placeSelf: "center",
    position: "relative",
  };

  return (
    <>
      <NextSeo
        title="JDA Diffusion - Service de gestion de réseaux sociaux"
        description="Page de détail du service de gestion de réseaux sociaux, relation clients, community manager."
        canonical="https://jdadiffusion.fr/detailCm"
        openGraph={{
          type: "Détail community manager",
          url: "https://jdadiffusion.fr/detailCm",
          site_name: "Détail community manager",
        }}
      />
      <div style={styling} className={style.container}>
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
          <div className={style.tarifContainer}>
            <div className={style.tarifBlock}>
              <span className={style.tarifTitle}>Offre Access</span>
              <div className={style.lineTarif}>
                <div className={style.whiteDote}></div>
                <span className={style.textTarif}>
                  Un Community Manager personnalisé 100 avis positifs de plus
                  sur Google
                </span>
              </div>
              <div className={style.lineTarif}>
                <div className={style.whiteDote}></div>
                <span className={style.textTarif}>
                  Gestion de 2 réseaux sociaux au choix (Facebook, Linkedin,
                  Instagram et TikTok) : animation, envoi des messages, réponses
                  aux commentaires, conception réponse type
                </span>
              </div>
              <div className={style.lineTarif}>
                <div className={style.whiteDote}></div>
                <span className={style.textTarif}>Veille concurrentielle</span>
              </div>
              <div className={style.lineTarif}>
                <div className={style.whiteDote}></div>
                <span className={style.textTarif}>
                  Création de la ligne éditoriale: élaboration du planning de
                  publication avec contenu textuel et visuel
                </span>
              </div>
              <div className={style.lineTarif}>
                <div className={style.whiteDote}></div>
                <span className={style.textTarif}>
                  Feedback sur les résultats obtenus chaque fin du mois
                </span>
              </div>
              <div style={{ display: "flex", marginTop: "30px" }}>
                <span
                  style={{
                    color: "#fff",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  Tarif :
                </span>
                <span
                  style={{
                    color: "#f3dd52",
                    fontSize: "1rem",
                    marginLeft: "10px",
                    fontWeight: "bold",
                  }}
                >
                  500€ HT/mois
                </span>
              </div>
              <div style={{ display: "flex", marginTop: "15px" }}>
                <span
                  style={{
                    color: "#fff",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  Frais de démarrage :
                </span>
                <span
                  style={{
                    color: "#f3dd52",
                    fontSize: "1rem",
                    marginLeft: "10px",
                    fontWeight: "bold",
                  }}
                >
                  1000€* HT
                </span>
              </div>
            </div>
            <div className={style.tarifBlock}>
              <span className={style.tarifTitle}>Offre Premium</span>
              <div className={style.lineTarif}>
                <div className={style.whiteDote}></div>
                <span className={style.textTarif}>
                  Un Community Manager personnalisé 300 avis positifs de plus
                  sur Google
                </span>
              </div>
              <div className={style.lineTarif}>
                <div className={style.whiteDote}></div>
                <span className={style.textTarif}>
                  Gestion de 4 réseaux sociaux (Facebook, Linkedin, Instagram et
                  TikTok) : animation, envoi des messages, réponses aux
                  commentaires, conception de réponse type
                </span>
              </div>
              <div className={style.lineTarif}>
                <div className={style.whiteDote}></div>
                <span className={style.textTarif}>
                  Veille concurrentielle plus détaillée
                </span>
              </div>
              <div className={style.lineTarif}>
                <div className={style.whiteDote}></div>
                <span className={style.textTarif}>
                  Création de la ligne éditoriale: élaboration du planning de
                  publication avec contenu textuel et visuel
                </span>
              </div>
              <div className={style.lineTarif}>
                <div className={style.whiteDote}></div>
                <span className={style.textTarif}>
                  Feedback plus détaillé sur les résultats obtenus chaque fin du
                  mois
                </span>
              </div>
              <div className={style.lineTarif}>
                <div className={style.whiteDote}></div>
                <span className={style.textTarif}>
                  Aide à la création d&apos;évènements et conseil sur les
                  produits générateurs de buzz
                </span>
              </div>
              <div className={style.lineTarif}>
                <div className={style.whiteDote}></div>
                <span className={style.textTarif}>
                  Création de site de réservation offert
                </span>
              </div>
              <div style={{ display: "flex", marginTop: "30px" }}>
                <span
                  style={{
                    color: "#fff",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  Tarif :
                </span>
                <span
                  style={{
                    color: "#f3dd52",
                    fontSize: "1rem",
                    marginLeft: "10px",
                    fontWeight: "bold",
                  }}
                >
                  1300€ HT/mois
                </span>
              </div>
              <div style={{ display: "flex", marginTop: "15px" }}>
                <span
                  style={{
                    color: "#fff",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  Frais de démarrage :
                </span>
                <span
                  style={{
                    color: "#f3dd52",
                    fontSize: "1rem",
                    marginLeft: "10px",
                    fontWeight: "bold",
                  }}
                >
                  1500€* HT
                </span>
              </div>
            </div>
          </div>
           <div style={{display:"flex",justifyContent:'center',alignItems:"center"}}>
          <span style={{color:"#fff", fontStyle:"italic"}}>*La gratuité du frais de démarrage est un levier de vente</span>
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
            width: "70vw",
            height: "70vh",
            marginTop:"10vh"
          }}
          className={style.imageDetail}
        >
          <Image
            src="/assets/images/cm_illustration.png"
            alt="community manager illustration"
            layout="fill"
            objectFit="contain"
            objectPosition="100% 25%"
          />
        </Animation>
      </div>
    </>
  );
}

export default DetailCm;
