import Image from "next/image";
import styles from "./services.module.css";
import Animation from "../animation/page";
import { useRouter } from "next/router";

function Service() {

  const route= useRouter()

  return (
    <div className={styles.container} id="SERVICES">
      <Animation className={styles.card} animation='fadeInDown'>
          <h1 className={styles.cardTitle}>Gestion des réseaux sociaux</h1>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/images/service1.png"
            alt="services Community manager"
            layout="fill"
            objectFit="contain"
            objectPosition="50% 50%"
          />
        </div>
        <div className={styles.button} onClick={()=>route.push('/detailCM')}>Détail</div>
      </Animation>
      <Animation className={styles.card} animation='fadeInUp'>
        <h1 className={styles.cardTitle}>Création de sites web sur mesure</h1>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/images/service2.png"
            alt="services Community manager"
            layout="fill"
            objectFit="contain"
            objectPosition="50% 50%"
          />
        </div>
        <div className={styles.button} onClick={()=>route.push('/detailCM')}>Détail</div>
      </Animation>
      <Animation className={styles.block3} animation="fadeInDown">
        <h3 className={styles.description}>
          Booster votre activité avec nos services sur mesure : création de site
          web performants et gestion efficace des réseaux sociaux pour maximiser
          votre visibilité et votre impact.
        </h3>
        <h3 className={styles.note}>
          Site web + Réseaux sociaux : la formule gagnante pour votre business
        </h3>
      </Animation>
    </div>
  );
}

export default Service;
