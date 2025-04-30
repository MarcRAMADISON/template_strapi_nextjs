import styles from "./avis.module.css";
import Image from "next/image";

function Avis() {
  return (
    <div className={styles.container}>
      <div className={styles.containerCard}>
        <div className={styles.card}>
          <div className={styles.block1}>
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
        </div>
        <div className={styles.card}>
          <div className={styles.block1}></div>
          <div className={styles.block2}></div>
        </div>
        <div className={styles.card}>
          <div className={styles.block1}></div>
          <div className={styles.block2}></div>
        </div>
      </div>
    </div>
  );
}

export default Avis;
