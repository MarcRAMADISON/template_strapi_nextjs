import Image from "next/image";
import styles from "./detailCM.module.css";
import { accessOffre, listinfo, premiumOffre } from "../../utils/utils";
import MenuBar from "../components/menuBar/page";
import Animation from "../components/animation/page";

function DetailCM() {
  return (
    <>
      <MenuBar outPage={true} />
      <div className={styles.container}>
        <Animation className={styles.tarifCard} animation="fadeInRight">
          <div className={styles.imageContainer}>
            <Image
              src="/assets/images/access.png"
              alt="tarif premium"
              layout="fill"
              objectFit="contain"
              objectPosition="50% 50%"
            />
          </div>
          <div className={styles.offreContainer}>
            <h2 className={styles.title}>Offre ACCESS :</h2>
            {accessOffre.map((offre, index) => {
              return (
                <div
                  key={index}
                  style={{ display: "flex", alignItems: "flex-start" }}
                >
                  <div className={styles.dote}></div>
                  <h3 className={styles.offre}>{offre}</h3>
                </div>
              );
            })}
          </div>
        </Animation>
        <Animation className={styles.tarifCard} animation="fadeInDown">
          <div className={styles.imageContainer}>
            <Image
              src="/assets/images/premium.png"
              alt="tarif premium"
              layout="fill"
              objectFit="contain"
              objectPosition="50% 50%"
            />
          </div>
          <div className={styles.offreContainer}>
            <h2 className={styles.title}>Offre Premium :</h2>
            {premiumOffre.map((offre, index) => {
              return (
                <div
                  key={index}
                  style={{ display: "flex", alignItems: "flex-start" }}
                >
                  <div className={styles.dote}></div>
                  <h3 className={styles.offre}>{offre}</h3>
                </div>
              );
            })}
          </div>
        </Animation>
        <Animation className={styles.infoCard} animation='fadeInLeft'>
          <h3 className={styles.textInfo}>
            Votre marque mérite mieux qu’une simple présence sur les réseaux
            sociaux.
          </h3>
          <div>
            {listinfo.map((info, index) => {
              return (
                <div key={index} style={{ display: "flex" }}>
                  <div className={styles.infoImage}>
                    <Image
                      src={info.image}
                      alt="info image"
                      layout="fill"
                      objectFit="contain"
                      objectPosition="50% 50%"
                    />
                  </div>
                  <div className={styles.infoTextContainer}>
                    <h2 className={styles.titleInfo}>{info.title}</h2>
                    <h3 className={styles.text}>{info.text}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </Animation>
      </div>
    </>
  );
}

export default DetailCM;
