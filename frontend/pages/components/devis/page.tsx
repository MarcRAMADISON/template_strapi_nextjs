import Image from "next/image";
import styles from "./devis.module.css";
import Animation from "../animation/page";

function Devis() {
  return (
    <div className={styles.container} id="CONTACT">
      <Animation className={styles.form} animation="fadeInRight">
        <div className={styles.twoLineContainer}>
          <div className={styles.field}>
            <h3 className={styles.label} style={{width:'107%'}}>Nom</h3>
            <input className={styles.inputField}/>
          </div>
          <div className={styles.field}>
            <h3 className={styles.label} style={{width:'80%'}}>Prénom</h3>
            <input className={styles.inputField}/>
          </div>
          <div className={styles.field}>
            <h3 className={styles.label} style={{width:'107%'}}>Type d&apos;entreprise * :</h3>
            <input className={styles.inputField}/>
          </div>
          <div className={styles.field}>
            <h3 className={styles.label} style={{width:'80%'}}>Nom de l&apos;entreprise * :</h3>
            <input className={styles.inputField}/>
          </div>
          <div className={styles.field}>
            <h3 className={styles.label} style={{width:'107%'}}>Numero téléphone:</h3>
            <input className={styles.inputField}/>
          </div>
          <div className={styles.field}>
            <h3 className={styles.label} style={{width:'80%'}}>Adresse e-mail:</h3>
            <input className={styles.inputField}/>
          </div>
        </div>
        <div className={styles.threeLineContainer}>
          <div className={styles.field}>
            <h3 className={styles.label}>Pays:</h3>
            <input className={styles.inputField}/>
          </div>
          <div className={styles.field}>
            <h3 className={styles.label}>Ville:</h3>
            <input className={styles.inputField}/>
          </div>
          <div className={styles.field}>
            <h3 className={styles.label}>Code postal:</h3>
            <input className={styles.inputField}/>
          </div>
        </div>
        <div className={styles.fieldMessage}>
            <h3 className={styles.label}>Message:</h3>
            <input className={styles.inputMessage}/>
          </div>
      
      </Animation>
      <Animation className={styles.contactCard} animation="fadeInLeft">
        <h1 className={styles.cardTitle}>
          Transformer vos idées en succès avec Jda diffusion
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h3 className={styles.contactText}>02 46 83 05 62</h3>
          <Image
            src="/assets/images/phone.png"
            alt="phone icon"
            width={20}
            height={20}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h3 className={styles.contactText}>contact@jdadiffusion.fr</h3>
          <Image
            src="/assets/images/mail.png"
            alt="E-mail icon"
            width={20}
            height={15}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h3 className={styles.contactText} style={{marginRight:"6px"}}>
          1 rue Léon Bourgeois 28100 Dreux
          </h3>
          <Image
            src="/assets/images/localisation.png"
            alt="E-mail icon"
            width={17}
            height={25}
          />
        </div>
        <div
          className={styles.buttonContainer}
        >
          <Image
            src="/assets/images/facebook.png"
            width={50}
            height={50}
            alt="facebook link"
          />
          <Image
            src="/assets/images/instagram.png"
            width={50}
            height={50}
            alt="instagram link"
          />
          <Image
            src="/assets/images/tik_tok.png"
            width={50}
            height={50}
            alt="tik tok link"
          />
          <Image
            src="/assets/images/linkedin.png"
            width={50}
            height={50}
            alt="linkedin link"
          />
        </div>
      </Animation>
    </div>
  );
}

export default Devis;
