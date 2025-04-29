import Image from "next/image";
import styles from "./presentation.module.css";

function Presentation() {
  return (
    <div className={styles.container}>
      <div className={styles.block1}>
        <h1 className={styles.title}>Qui nous sommes ?</h1>
        <h2 className={styles.subTitle}>
          Chez JDA Diffusion, nous donnons un véritable coup d’accélérateur à
          votre activité. Grâce à des solutions de marketing digital efficaces
          et sur mesure, nous vous aidons à augmenter votre chiffre d’affaires
          et à atteindre vos objectifs. Entreprises, entrepreneurs, commerces,
          et bien d’autres : nous vous accompagnons avec des stratégies
          digitales puissantes, conçues pour votre succès. Faites la différence
          avec JDA Diffusion.
        </h2>
        <div className={styles.slogans}>
          <h3 className={styles.item}>Proximité</h3>
          <h3 className={styles.item}>Créativité</h3>
          <h3 className={styles.item}>Efficacité</h3>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src='/assets/images/marketing_illustration.png' alt='marketing illustration' layout='fill' objectFit="contain"/>
      </div>
      <div></div>
    </div>
  );
}

export default Presentation;
