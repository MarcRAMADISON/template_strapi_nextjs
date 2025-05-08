import Image from "next/image";
import MenuBar from "../components/menuBar/page";
import styles from "./detailDW.module.css";
import { detailList } from "../../utils/utils";
import Animation from "../components/animation/page";

function DetailDW() {
  return (
    <>
      <MenuBar outPage={true} />
      <div className={styles.container}>
        <div className={styles.block1}>
          <Animation className={styles.textBlock} animation="fadeInRight">
            <h2 className={styles.title}>Création de sites sur mesure</h2>
            <div className={styles.listDetail}>
              {detailList.map((detail, index) => {
                return (
                  <div
                    key={index}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div className={styles.icon}>
                      <Image
                        src="/assets/images/listIcon.png"
                        alt="illustration dev"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <h3 className={styles.detail}>{detail}</h3>
                  </div>
                );
              })}
            </div>
          </Animation>
          <Animation className={styles.imageContainer} animation="fadeInLeft">
            <Image
              src="/assets/images/illustration_dev.png"
              alt="illustration dev"
              layout="fill"
              objectFit="contain"
              objectPosition="right top"
            />
          </Animation>
        </div>
        <Animation className={styles.block2} animation="fadeInUp">
          <div className={styles.item}>
            <div className={styles.iconService}>
              <Image
                src="/assets/images/icon1.png"
                alt="illustration dev"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className={styles.textService}>Un site sur-mesure, pensé pour refléter votre marque et booster vos résultats.</h3>
          </div>
          <div className={styles.item}>
            <div className={styles.iconService}>
              <Image
                src="/assets/images/icon2.png"
                alt="illustration dev"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className={styles.textService}>Un site qui performe sur Google et captive vos visiteurs.</h3>
          </div>
          <div className={styles.item}>
            <div className={styles.iconService}>
              <Image
                src="/assets/images/icon3.png"
                alt="illustration dev"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className={styles.textService}>Un site rapide, fiable et pensé pour convertir vos visiteurs en clients.</h3>
          </div>
        </Animation>
      </div>
    </>
  );
}

export default DetailDW;
