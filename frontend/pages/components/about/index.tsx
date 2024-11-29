import Image from "next/image";
import style from './about.module.css'

function About() {
    return ( <div>
        <Image style={{}} layout='fill' src='/assets/images/headerBg.svg' alt='image'/>
        <span className={style.headerTitle}>Laissez-nous faire briller votre entreprise !</span>
        <button className={style.contactButton}>Contacter-nous</button>
        <span className={style.headerSubTitle}>Votre partenaire de confiance pour une presence digitale impactante et unique</span>
    </div> );
}

export default About;