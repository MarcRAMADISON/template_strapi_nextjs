import Image from 'next/image';
import styles from './welcome.module.css'

function Welcome() {
    return ( <div className={styles.container}>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>AGENCE DE MARKETING DIGITAL</h1>
            <h2 className={styles.subtitle}>Laissez-nous faire briller votre entreprise !</h2>
            <div className={styles.button}><div className={styles.dote}></div>Nous contacter</div>
        </div>
        <div className={styles.imageContainer}>
            <Image src='/assets/images/welcome_image.png' alt='welcome image' layout='fill' objectFit='contain'/>
        </div>

    </div> );
}

export default Welcome;