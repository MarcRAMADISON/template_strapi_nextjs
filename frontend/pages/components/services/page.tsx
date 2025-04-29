import Image from 'next/image';
import styles from './services.module.css'

function Service() {
    return ( <div className={styles.container}>
        <div className={styles.card}>
            <h1 className={styles.cardTitle}>
            Gestion des réseaux
            sociaux
            </h1>
            <div className={styles.imageContainer}>
            <Image src='/assets/images/service1.png' alt="services Community manager" layout='fill' objectFit='contain' objectPosition="50% 50%"/>
            </div>
            <div className={styles.button}>Détail</div>
        </div>
        <div className={styles.card}>
            <h1 className={styles.cardTitle}>
            Création de sites web sur mesure
            </h1>
            <div className={styles.imageContainer}>
            <Image src='/assets/images/service2.png' alt="services Community manager" layout='fill' objectFit='contain' objectPosition="50% 50%"/>
            </div>
            <div className={styles.button}>Détail</div>
        </div>
        <div className={styles.block3}>
            <h3 className={styles.description}>Booster votre activité avec nos services sur mesure : création de site web performants et gestion efficace des réseaux sociaux pour maximiser votre visibilité et votre impact.</h3>
            <h3 className={styles.note}>Site web + Réseaux sociaux : la formule gagnante pour votre business</h3>
        </div>
    </div> );
}

export default Service;