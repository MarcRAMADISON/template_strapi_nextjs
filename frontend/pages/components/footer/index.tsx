import Image from "next/image";
import style from "./footer.module.css";

function Footer() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection:'column',
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#62dfbf",
        height: "150px",
      }}
    >
      <div className={style.imageContainer}>
        <Image
          src="/assets/images/facebook.png"
          className={style.imageItem}
          alt="facebook logo"
          width={40}
          height={40}
        />
        <Image
          src="/assets/images/instagram_logo.png"
          className={style.imageItem}
          alt="instagram logo"
          width={40}
          height={40}
        />
        <Image
          src="/assets/images/tik_tok.png"
          className={style.imageItem}
          alt="tik tok logo"
          width={40}
          height={40}
        />
        <Image
          src="/assets/images/linkedin.png"
          className={style.imageItem}
          alt="linkedin logo"
          width={40}
          height={40}
        />
      </div>
      <span className={style.copyright}>Copyright (c) JDA Diffusion | 2024</span>
    </div>
  );
}

export default Footer;
