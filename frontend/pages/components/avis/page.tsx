import styles from "./avis.module.css";
import Image from "next/image";
import Animation from "../animation/page";

function Avis() {
  return (
    <div className={styles.container} id='AVIS'>
      <h1 className={styles.title}>Ce que disent nos clients sur nous :</h1>
      <div className={styles.containerCard}>
        <Animation className={styles.card} animation='fadeInRight'>
          <div className={styles.block1}>
            <div className={styles.avatarContainer}>
              <Image src='/assets/images/logo_mzo.png' style={{borderRadius:'50%'}} alt="avatar" layout="fill" objectFit="contain"/>
            </div>
            <h1 className={styles.cardTitle}>MZO CONTACT CENTER</h1>
            <div className={styles.imageContainer}>
              <Image
                src="/assets/images/stars.png"
                alt="stars"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className={styles.block2}>
            <h3 className={styles.description}>Grâce à JDA Diffusion, je peux me concentrer sur mon cœur de métier sans me soucier de ma communication. Ils s’occupent de tout et le font à la perfection. Je suis ravie des résultats.</h3>
          </div>
        </Animation>
        <Animation className={styles.card} style={{scale:'1.1'}} animation='fadeInDown'>
          <div className={styles.block1}>
            <div className={styles.avatarContainer}>
              <Image src='/assets/images/logo_grands_pins.jpg' style={{borderRadius:'50%'}} alt="avatar" layout="fill" objectFit="contain"/>
            </div>
            <h1 className={styles.cardTitle}>Oasis des Grands Pins</h1>
            <div className={styles.imageContainer}>
              <Image
                src="/assets/images/stars.png"
                alt="stars"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className={styles.block2}>
            <h3 className={styles.description}>Un immense merci à JDA Diffusion pour leur expertise et leur accompagnement ! Grâce à leurs conseils stratégiques et leur approche personnalisée, mes ventes ont connu un vrai coup de boost. Leur professionnalisme, leur écoute et leurs solutions sur-mesure font toute la différence. Je recommande à 100 % pour tous ceux qui veulent optimiser leur performance commerciale !</h3>
          </div>
        </Animation>
        <Animation className={styles.card} animation='fadeInLeft'>
          <div className={styles.block1}>
            <div className={styles.avatarContainer}>
              <Image src='/assets/images/avatar1.jpg' style={{borderRadius:'50%'}} alt="avatar" layout="fill" objectFit="contain"/>
            </div>
            <h1 className={styles.cardTitle}>Sonia Chabert</h1>
            <div className={styles.imageContainer}>
              <Image
                src="/assets/images/stars.png"
                alt="stars"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className={styles.block2}>
            <h3 className={styles.description}>En tant que propriétaire d’un salon de coiffure, j’avais besoin d’aide pour ma communication digitale. L’équipe de JDA Diffusion a su mettre en valeur mon activité avec des visuels modernes et une stratégie parfaitement adaptée à ma clientèle. Un service au top !</h3>
          </div>
        </Animation>
      </div>
    </div>
  );
}

export default Avis;
