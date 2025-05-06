import Image from "next/image";
import styles from "./menuBar.module.css";
import { useState } from "react";
import { handleNavigation } from "../../../utils/utils";
import { useRouter } from "next/router";

function MenuBar({outPage}:{outPage?:boolean}) {
  const [isOpen, setIsOpen] = useState(false);
  const router= useRouter()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate=(id:string)=>{
    if(outPage){
      router.push('/')
    } else{
      handleNavigation(id)
    }
  }
  return (
    <>
      <div className={styles.container}>
        <div
          style={{
            position: "relative",
            width: "200px",
            height: "90px",
            marginLeft: "6vw",
          }}
        >
          <Image
            src="/assets/images/logo.png"
            alt="jda logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={styles.menuItems}>
          <h1 className={styles.item} onClick={() => navigate("ABOUT")}>
            Qui nous sommes ?
          </h1>
          <h1
            className={styles.item}
            onClick={() => navigate("SERVICES")}
          >
            Nos services
          </h1>
          <h1 className={styles.item} onClick={() => navigate("AVIS")}>
            Avis
          </h1>
          <div
            className={styles.button}
            onClick={() => navigate("CONTACT")}
          >
            Nous contacter
          </div>
        </div>
      </div>
      <div className={styles.mobileContainer}>
        <div className={styles.burgerContainer}>
          <button className={styles.burgerButton} onClick={toggleMenu}>
            <div
              className={`${styles.line} ${isOpen ? styles.open : ""}`}
            ></div>
            <div
              className={`${styles.line} ${isOpen ? styles.open : ""}`}
            ></div>
            <div
              className={`${styles.line} ${isOpen ? styles.open : ""}`}
            ></div>
          </button>

          <div
            className={`${styles.menu}`}
            style={{
              opacity: isOpen ? "1" : "0",
              width: isOpen ? "100%" : "0px",
            }}
          >
            <ul>
              <li>
                <span
                  onClick={() => {
                    navigate("ABOUT");
                    setIsOpen(false);
                  }}
                >
                  Qui sommes nous?
                </span>
              </li>
              <li>
                <span
                  onClick={() => {
                    navigate("SERVICES");
                    setIsOpen(false);
                  }}
                >
                  Nos services
                </span>
              </li>
              <li>
                <span
                  onClick={() => {
                    navigate("AVIS");
                    setIsOpen(false);
                  }}
                >
                  Avis
                </span>
              </li>
              <li>
                <span
                  onClick={() => {
                    navigate("CONTACT");
                    setIsOpen(false);
                  }}
                >
                  Nous contacter
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuBar;
