import Image from "next/image";
import style from "./header.module.css";
import MenuBar from "../menuBar";

const styling = {
    backgroundImage: `url('/assets/images/headerBg.svg')`,
    width:"100%",
    height:"100%"
}

function Header() {
    return ( <div className={style.headerContainer} >
        <MenuBar/>
        <Image style={{position:'absolute', top:'0',left:'0',zIndex:'0', width:'100%'}} layout='fill' src='/assets/images/headerBg.svg' alt='image'/>
        <span className={style.headerTitle}>Laissez-nous faire briller votre entreprise !</span>
        <button className={style.contactButton}>Contacter-nous</button>
        <span className={style.headerSubTitle}>Votre partenaire de confiance pour une presence digitale impactante et unique</span>
    </div> );
}

export default Header;