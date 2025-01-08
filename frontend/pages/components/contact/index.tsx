import { CSSProperties, useState } from "react";
import style from "./contact.module.css";
import emailjs from "@emailjs/browser";

const styling: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  backgroundImage: `url('/assets/images/contactBg.jpg')`,
  width: "100%",
  height: "100vh",
  minHeight: "1080px",
  maxHeight: "1080px",
  marginTop: "50px",
  position: "relative",
};

interface contactObject {
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

const defaultContact = {
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
};

function Contact() {
  const [values, setValues] = useState<contactObject>(defaultContact);
  const [showMessage, setShowMessage] = useState<"SUCCESS" | "ERROR" | "HIDE">(
    "HIDE"
  );

  const handleChange = (e: any) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSend = () => {
    if (values) {
      emailjs.init("o_JY9sgqyH7Sdqek7");

      emailjs.send("service_rcyzudb", "template_ksy3c3t", values as any).then(
        (response) => {
          setShowMessage("SUCCESS");
          setValues(defaultContact);
        },
        (error) => {
          setShowMessage("ERROR");
        }
      );
    }
  };


  const checkdisable=!values?.typeEntreprise || !values?.nomEntreprise || !values?.telephone || !values?.email || !values?.message;

  return (
    <div id="contact" className={style.contactBlock} style={styling}>
      <div className={style.inputBlock}>
        <div className={style.inputLine}>
          <label className={style.inputText} htmlFor="nom">
            Nom :
          </label>
          <input
            style={{
              background: "none",
              borderRadius: "10px",
              color: "#fff",
              border: "1px solid #f3dd52",
              padding: "10px",
            }}
            type="text"
            id="nom"
            name="nom"
            value={values.nom}
            required
            onChange={handleChange}
          />
        </div>
        <div className={style.inputLine}>
          <label className={style.inputText} htmlFor="prenom">
            Prénom :
          </label>
          <input
            style={{
              background: "none",
              borderRadius: "10px",
              color: "#fff",
              border: "1px solid #f3dd52",
              padding: "10px",
            }}
            type="text"
            id="prenom"
            name="prenom"
            value={values.prenom}
            required
            onChange={handleChange}
          />
        </div>
        <div className={style.inputLine}>
          <label className={style.inputText} htmlFor="etablissement-select">
            Type d&apos;entreprise * :
          </label>
          <select
            style={{
              background: "none",
              borderRadius: "10px",
              color: "#fff",
              border: "1px solid #f3dd52",
              padding: "10px",
            }}
            name="typeEntreprise"
            value={values.typeEntreprise}
            onChange={handleChange}
            id="etablissement-select"
          >
            <option style={{ backgroundColor: "#000" }} value="Restaurant">
              Restaurant
            </option>
            <option style={{ backgroundColor: "#000" }} value="Hotel">
              Hotel
            </option>
            <option
              style={{ backgroundColor: "#000" }}
              value="Salon de coiffure"
            >
              Salon de coiffure
            </option>
            <option
              style={{ backgroundColor: "#000" }}
              value="Institut de Bien être"
            >
              Institut de Bien être
            </option>
            <option style={{ backgroundColor: "#000" }} value="Autre">
              Autre
            </option>
          </select>
        </div>
        <div className={style.inputLine}>
          <label className={style.inputText} htmlFor="nomEntreprise">
            Nom de l&apos;entreprise * :
          </label>
          <input
            style={{
              background: "none",
              borderRadius: "10px",
              color: "#fff",
              border: "1px solid #f3dd52",
              padding: "10px",
            }}
            type="text"
            id="nomEntreprise"
            name="nomEntreprise"
            value={values.nomEntreprise}
            required
            onChange={handleChange}
          />
        </div>
        <div className={style.inputLine}>
          <label className={style.inputText} htmlFor="telephone">
            Téléphone * :
          </label>
          <input
            style={{
              background: "none",
              borderRadius: "10px",
              color: "#fff",
              border: "1px solid #f3dd52",
              padding: "10px",
            }}
            type="text"
            id="telephone"
            name="telephone"
            value={values.telephone}
            required
            onChange={handleChange}
          />
        </div>
        <div className={style.inputLine}>
          <label className={style.inputText} htmlFor="email">
            Adresse E-mail * :
          </label>
          <input
            style={{
              background: "none",
              borderRadius: "10px",
              color: "#fff",
              border: "1px solid #f3dd52",
              padding: "10px",
            }}
            type="text"
            id="email"
            name="email"
            value={values.email}
            required
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={style.lineBlock}>
        <div className={style.inputLine}>
          <label className={style.inputText} htmlFor="pays">
            Pays :
          </label>
          <input
            style={{
              background: "none",
              borderRadius: "10px",
              color: "#fff",
              border: "1px solid #f3dd52",
              padding: "10px",
            }}
            type="text"
            id="pays"
            name="pays"
            value={values.pays}
            required
            onChange={handleChange}
          />
        </div>
        <div className={style.inputLine}>
          <label className={style.inputText} htmlFor="ville">
            Ville :
          </label>
          <input
            style={{
              background: "none",
              borderRadius: "10px",
              color: "#fff",
              border: "1px solid #f3dd52",
              padding: "10px",
            }}
            type="text"
            id="ville"
            name="ville"
            value={values.ville}
            required
            onChange={handleChange}
          />
        </div>
        <div className={style.inputLine}>
          <label className={style.inputText} htmlFor="codePostal">
            Code postal :
          </label>
          <input
            style={{
              background: "none",
              borderRadius: "10px",
              color: "#fff",
              border: "1px solid #f3dd52",
              padding: "10px",
            }}
            type="text"
            id="codePostal"
            name="codePostal"
            value={values.codePostal}
            required
            onChange={handleChange}
          />
        </div>
      </div>
      <div
        style={{ position: "relative",marginTop: "50px" }}
        className={style.message}
      >
          <label className={style.inputText} htmlFor="message">
            Message * :
          </label>
          <textarea
            style={{
              background: "none",
              borderRadius: "10px",
              color: "#fff",
              border: "1px solid #f3dd52",
              padding: "10px",
              height: "200px",
            }}
            id="message"
            name="message"
            value={values.message}
            required
            onChange={handleChange}
          />
        <button className={checkdisable ? style.disabledButton : style.sendButton} onClick={handleSend} disabled={checkdisable}>
          Envoyer
        </button>
        {showMessage === "SUCCESS" ? (
          <span
            style={{
              color: "#fff",
              fontWeight: "1rem",
              marginTop:'120px'
            }}
          >
            Votre message a été envoyé, on reviendra vers vous le plus tôt possible.
          </span>
        ) : showMessage === "ERROR" ? (
          <span
            style={{
              color: "red",
              fontWeight: "1rem",
              marginTop:'20px'
            }}
          >
            Erreur lors de l&apos;envoie de votre message
          </span>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Contact;
