import { CSSProperties } from "react";
import style from "./contact.module.css";

const styling: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  backgroundImage: `url('/assets/images/contactBg.jpg')`,
  width: "100%",
  height: "100vh",
  minHeight: "1080px",
  maxHeight:"1080px",
  marginTop: "50px",
  position:"relative"
};

function Contact() {
  return (
    <div id="contact" className={style.contactBlock} style={styling}>
      <div className={style.inputBlock}>
        <div className={style.inputLine}>
          <label className={style.inputText} htmlFor="name">
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
            id="name"
            name="name"
            required
          />
        </div>
        <div className={style.inputLine}>
          <label className={style.inputText} htmlFor="name">
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
            id="name"
            name="name"
            required
          />
        </div>
        <div className={style.inputLine}>
          <label className={style.inputText} htmlFor="name">
            Client :
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
            id="name"
            name="name"
            required
          />
        </div>
        <div className={style.inputLine}>
          <label className={style.inputText} htmlFor="name">
            Nom de l&apos;entreprise :
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
            id="name"
            name="name"
            required
          />
        </div>
        <div className={style.inputLine}>
          <label className={style.inputText} htmlFor="name">
            Téléphone :
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
            id="name"
            name="name"
            required
          />
        </div>
        <div className={style.inputLine}>
          <label className={style.inputText} htmlFor="name">
            Email :
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
            id="name"
            name="name"
            required
          />
        </div>
      </div>
      <div className={style.lineBlock}>
        <div className={style.inputLine}>
          <label className={style.inputText} htmlFor="name">
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
            id="name"
            name="name"
            required
          />
        </div>
        <div className={style.inputLine}>
          <label className={style.inputText} htmlFor="name">
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
            id="name"
            name="name"
            required
          />
        </div>
        <div className={style.inputLine}>
          <label className={style.inputText} htmlFor="name">
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
            id="name"
            name="name"
            required
          />
        </div>
      </div>
      <div style={{position:'relative',width:'60%',marginTop:'50px'}} className={style.message}>
        <div className={style.inputLine}>
          <label className={style.inputText} htmlFor="name">
            Messages :
          </label>
          <input
            style={{
              background: "none",
              borderRadius: "10px",
              color: "#fff",
              border: "1px solid #f3dd52",
              padding: "10px",
              height:'200px'
            }}
            type="text"
            id="name"
            name="name"
            required
            multiple
          />
        </div>
        <button className={style.sendButton}>Envoyer</button>

      </div>
    </div>
  );
}

export default Contact;
