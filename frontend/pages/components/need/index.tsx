import { CSSProperties } from "react";
import Image from "next/image";
import style from "./need.module.css";
import Animation from "../animation";

const styling: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "center",
  backgroundImage: `url('/assets/images/needBg.jpg')`,
  width: "100%",
  height: "fit-content",
  minHeight: "900px",
};

function Need() {

  const handleChange=()=>{

  }

  return (
    <div id="need" className={style.needContainer} style={styling}>
       <Animation
        props={{
          offsreen: {
            x: -200,
            opacity: 0,
          },
          onscreen: {
            x: 0,
            opacity: 1,
          },
        }}
        style={{
          width: "60%",
          height: "80vh",
          maxHeight:'850px',
          position: "relative",
          top: "130px",
          left:'1vw'
        }}
        className={style.imageNeed}
      >
        
        <Image
          style={{ position: "absolute" }}
          src="/assets/images/need_illustration.png"
          alt="computer illustration"
          layout="fill"
          objectFit="contain"
          objectPosition="0% 0%"
        />

      </Animation>

      <div className={style.textBlock}>
        <span className={style.title}>DEFINIR VOS BESOINS</span>
        <div className={style.questBlock}>
          <div className={style.questLine}>
            <input style={{marginRight:'20px',accentColor:'#f3dd52'}} type="checkbox" id="scales" name="scales" checked onChange={handleChange}/>
            <label htmlFor="scales" className={style.formLibelle} >Améliorer ma visibilité en ligne</label>
          </div>
          <div className={style.questLine}>
            <input style={{marginRight:'20px',accentColor:'#f3dd52'}} type="checkbox" id="scales" name="scales" checked onChange={handleChange}/>
            <label htmlFor="scales" className={style.formLibelle} >Créer un site web moderne et attractif</label>
          </div>
          <div className={style.questLine}>
            <input style={{marginRight:'20px',accentColor:'#f3dd52'}} type="checkbox" id="scales" name="scales" checked onChange={handleChange}/>
            <label htmlFor="scales" className={style.formLibelle} >Attirer plus de clients grâce à des publicités en ligne</label>
          </div>
          <div className={style.questLine}>
            <input style={{marginRight:'20px',accentColor:'#f3dd52'}} type="checkbox" id="scales" name="scales" checked onChange={handleChange}/>
            <label htmlFor="scales" className={style.formLibelle} >Apparaitre en tête des recherches sur Google</label>
          </div>
          <div className={style.questLine}>
            <input style={{marginRight:'20px',accentColor:'#f3dd52'}} type="checkbox" id="scales" name="scales" checked onChange={handleChange}/>
            <label htmlFor="scales" className={style.formLibelle} >Avoir une présence professionnelle sur les réseaux sociaux</label>
          </div>
          <div className={style.questLine}>
            <input style={{marginRight:'20px',accentColor:'#f3dd52'}} type="checkbox" id="scales" name="scales" checked onChange={handleChange}/>
            <label htmlFor="scales" className={style.formLibelle} >Donner une image professionnelle et crédible à mon entreprise</label>
          </div>
          <div className={style.questLine}>
            <input style={{marginRight:'20px',accentColor:'#f3dd52'}} type="checkbox" id="scales" name="scales" checked onChange={handleChange}/>
            <label htmlFor="scales" className={style.formLibelle} >Construire une communauté fidèle autour de mon entreprise</label>
          </div>
          <div className={style.questLine}>
            <input style={{marginRight:'20px',accentColor:'#f3dd52'}} type="checkbox" id="scales" name="scales" checked onChange={handleChange}/>
            <label htmlFor="scales" className={style.formLibelle} >Augmenter votre visibilité auprès de vos clients idéaux</label>
          </div>
          <div className={style.questLine}>
            <input style={{marginRight:'20px',accentColor:'#f3dd52'}} type="checkbox" id="scales" name="scales" checked onChange={handleChange}/>
            <label htmlFor="scales" className={style.formLibelle} >Développer une stratégie digitale alignée avec mes objectifs</label>
          </div>
          <div className={style.questLine}>
            <input style={{marginRight:'20px',accentColor:'#f3dd52'}} type="checkbox" id="scales" name="scales" checked onChange={handleChange}/>
            <label htmlFor="scales" className={style.formLibelle} >Proposer une expérience utilisateur fluide et moderne sur votre site</label>
          </div>
          <div className={style.questLine}>
            <input style={{marginRight:'20px',accentColor:'#f3dd52'}} type="checkbox" id="scales" name="scales" checked onChange={handleChange}/>
            <label htmlFor="scales" className={style.formLibelle}>Renforcer votre notoriété avec une stratégie cohérent</label>
          </div>
          <div className={style.questLine}>
            <input style={{marginRight:'20px',accentColor:'#f3dd52'}} type="checkbox" id="scales" name="scales" checked onChange={handleChange}/>
            <label htmlFor="scales" className={style.formLibelle} >Faire grandir votre activité avec un accompagnement personnalisé</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Need;
