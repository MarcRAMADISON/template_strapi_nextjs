import Image from "next/image";
import styles from "./menuBar.module.css";
import { useState } from "react";

function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
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
          <h1 className={styles.item}>Qui nous sommes ?</h1>
          <h1 className={styles.item}>Nos services</h1>
          <h1 className={styles.item}>Avis</h1>
          <div className={styles.button}>Nous contacter</div>
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

          <div className={`${styles.menu}`} style={{opacity: isOpen?"1" : "0",width: isOpen?'100%':"0px"}}>
            <ul>
              <li>
                <a href="#">Qui sommes nous?</a>
              </li>
              <li>
                <a href="#">Nos services</a>
              </li>
              <li>
                <a href="#">Avis</a>
              </li>
              <li>
                <a href="#">Nous contacter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuBar;
