import style from "./header.module.css";
import MenuBar from "../menuBar";
import { CSSProperties } from "react";
import { handleNavigation } from "../../../utils/utils";
import Image from "next/image";

const styling: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  backgroundImage: `url('/assets/images/headerBg.jpg')`,
  width: "100%",
  height: "90vh",
  position: "relative",
};

function Header() {
  return (
    <div id='header' style={styling} className={style.headerContainer}>
      <div className={style.phoneImage}>
        <Image
          style={{ zIndex: 0, margin: "100px" }}
          src="/assets/images/phone.png"
          alt="community manager illustration"
          layout="fill"
          objectFit="contain"
          objectPosition="50% 50%"
        />
      </div>
      <span className={style.headerTitle}>
        Laissez-nous faire briller votre entreprise !
      </span>
      <button
        className={style.contactButton}
        onClick={() => handleNavigation("contact")}
      >
        Contacter-nous
      </button>
      <span
        className={style.headerSubTitle}
        style={{ width: "90%", textAlign: "center" }}
      >
        Votre partenaire de confiance pour une presence digitale impactante et
        unique
      </span>
    </div>
  );
}

export default Header;
