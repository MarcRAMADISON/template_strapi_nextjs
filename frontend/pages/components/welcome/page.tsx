import Image from 'next/image';
import styles from './welcome.module.css'
import Animation from '../animation/page';
import { handleNavigation } from '../../../utils/utils';

function Welcome() {
    return ( <div className={styles.container}>
        <Animation animation='fadeInUp' className={styles.textContainer}>
            <h1 className={styles.title}>AGENCE DE MARKETING DIGITAL</h1>
            <h2 className={styles.subtitle}>Laissez-nous faire briller votre entreprise !</h2>
            <div className={styles.button}  onClick={()=>handleNavigation('CONTACT')}><div className={styles.dote}></div>Nous contacter</div>
        </Animation>
        <Animation animation='fadeInDown' className={styles.imageContainer}>
            <Image src='/assets/images/welcome_image.png' alt='welcome image' layout='fill' objectFit='contain' />
        </Animation>

    </div> );
}

export default Welcome;