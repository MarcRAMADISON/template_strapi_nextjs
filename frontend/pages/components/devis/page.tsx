import Image from "next/image";
import styles from "./devis.module.css";
import Animation from "../animation/page";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


interface inputObject {
  nom: string;
  prenom: string;
  typeEntreprise: string;
  nomEntreprise: string;
  telephone: string;
  email: string;
  pays: string;
  ville: string;
  codePostal: string;
  message: string;
}

const defaultValues={
  nom: "",
  prenom: "",
  typeEntreprise: "Restaurant",
  nomEntreprise: "",
  telephone: "",
  email: "",
  pays: "",
  ville: "",
  codePostal: "",
  message: "",
}

function Devis() {
  const [loading,setLoading]=useState<boolean>(false)
  const [values, setValues] = useState<inputObject>(defaultValues);

  const handleChange = (e: any) => {
    e.preventDefault();

    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSend = () => {
    if (values) {
      setLoading(true)
      emailjs.init("o_JY9sgqyH7Sdqek7");

      emailjs.send("service_rcyzudb", "template_ksy3c3t", values as any).then(
        (response) => {
          Swal.fire({
            title: "Message envoyé!",
            text: "Votre message a été envoyé avec success, on reviendra vers vous le plus tôt possible.",
            icon: "success",
            confirmButtonColor:"#94F9FF",
          });
          setValues(defaultValues);
          setLoading(false)
        },
        (error) => {
          Swal.fire({
            title: "Erreur de l'envoie de votre message!",
            text: "Votre message n'a pas été envoyer",
            icon: "error",
            confirmButtonColor:"#94F9FF",
          });
          setLoading(false)
        }
      );
    }
  };

  console.log('loading',loading)

  const showBtn=values.nomEntreprise && values.typeEntreprise && values.telephone && values.email

  return (
    <div className={styles.container} id="CONTACT">
      <Animation className={styles.form} animation="fadeInRight">
        <div className={styles.twoLineContainer}>
          <div className={styles.field}>
            <h3 className={styles.label} style={{ width: "107%" }}>
              Nom
            </h3>
            <input
              className={styles.inputField}
              name="nom"
              value={values.nom}
              onChange={handleChange}
            />
          </div>
          <div className={styles.field}>
            <h3 className={styles.label} style={{ width: "80%" }}>
              Prénom
            </h3>
            <input
              className={styles.inputField}
              name="prenom"
              value={values.prenom}
              onChange={handleChange}
            />
          </div>
          <div className={styles.field}>
              <label
                className={styles.label}
                htmlFor="etablissement-select"
                style={{marginTop:'14px'}}
              >
                Type d&apos;entreprise * :
              </label>
              <select
                style={{
                  background: "#fff",
                  borderRadius: "10px",
                  color: "#000",
                  border: "1px solid #000",
                  padding: "10px",
                }}
                className={styles.inputField}
                name="typeEntreprise"
                value={values.typeEntreprise}
                onChange={handleChange}
                id="etablissement-select"
              >
                <option style={{ backgroundColor: "#fff" }} value="Restaurant">
                  Restaurant
                </option>
                <option style={{ backgroundColor: "#fff" }} value="Hotel">
                  Hotel
                </option>
                <option
                  style={{ backgroundColor: "#fff" }}
                  value="Salon de coiffure"
                >
                  Salon de coiffure
                </option>
                <option
                  style={{ backgroundColor: "#fff" }}
                  value="Institut de Bien être"
                >
                  Institut de Bien être
                </option>
                <option style={{ backgroundColor: "#fff" }} value="Autre">
                  Autre
                </option>
              </select>
          </div>
          <div className={styles.field}>
            <h3 className={styles.label} style={{ width: "80%" }}>
              Nom de l&apos;entreprise * :
            </h3>
            <input
              className={styles.inputField}
              name="nomEntreprise"
              value={values.nomEntreprise}
              onChange={handleChange}
            />
          </div>
          <div className={styles.field}>
            <h3 className={styles.label} style={{ width: "107%" }}>
              Numero téléphone * :
            </h3>
            <input
              className={styles.inputField}
              name="telephone"
              value={values.telephone}
              onChange={handleChange}
            />
          </div>
          <div className={styles.field}>
            <h3 className={styles.label} style={{ width: "80%" }}>
              Adresse e-mail * :
            </h3>
            <input
              className={styles.inputField}
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.threeLineContainer}>
          <div className={styles.field}>
            <h3 className={styles.label}>Pays:</h3>
            <input
              className={styles.inputField}
              name="pays"
              value={values.pays}
              onChange={handleChange}
            />
          </div>
          <div className={styles.field}>
            <h3 className={styles.label}>Ville:</h3>
            <input
              className={styles.inputField}
              name="ville"
              value={values.ville}
              onChange={handleChange}
            />
          </div>
          <div className={styles.field}>
            <h3 className={styles.label}>Code postal:</h3>
            <input
              className={styles.inputField}
              name="codePostal"
              value={values.codePostal}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.fieldMessage}>
          <h3 className={styles.label}>Message:</h3>
          <textarea
            className={styles.inputMessage}
            name="message"
            value={values.message}
            onChange={handleChange}
            rows={10}
          />
        </div>
        <button className={styles.bouton} style={{opacity: showBtn? 1 : 0}} onClick={handleSend} disabled={loading} >{loading? "..." : "Envoyer"}</button>
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
          <h3 className={styles.contactText} style={{ marginRight: "6px" }}>
            1 rue Léon Bourgeois 28100 Dreux
          </h3>
          <Image
            src="/assets/images/localisation.png"
            alt="E-mail icon"
            width={17}
            height={25}
          />
        </div>
        <div className={styles.buttonContainer}>
          <a href="https://www.facebook.com/profile.php?id=61569910295845" target="_blank" rel="noreferrer">
          <Image
            src="/assets/images/facebook.png"
            width={50}
            height={50}
            alt="facebook link"
          />
          </a>
          <a href="https://www.instagram.com/jdadiffusion/" target="_blank" rel="noreferrer">
          <Image
            src="/assets/images/instagram.png"
            width={50}
            height={50}
            alt="instagram link"
          />
          </a>
          <a href="https://www.tiktok.com/following" target="_blank" rel="noreferrer">
          <Image
            src="/assets/images/tik_tok.png"
            width={50}
            height={50}
            alt="tik tok link"
          />
          </a>
          <a href="https://www.linkedin.com/in/joao-de-almeida-jda-diffusion-7149a71/recent-activity/all/" target="_blank" rel="noreferrer">
          <Image
            src="/assets/images/linkedin.png"
            width={50}
            height={50}
            alt="linkedin link"
          />
          </a>
        </div>
      </Animation>
    </div>
  );
}

export default Devis;
