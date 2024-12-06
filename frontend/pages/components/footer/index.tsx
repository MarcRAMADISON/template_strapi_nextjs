import Image from "next/image";
import style from "./footer.module.css";

function Footer() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#62dfbf",
        height: "150px",
      }}
    >
      <div className={style.imageContainer}>
        <a
          href="https://www.facebook.com/profile.php?id=61569910295845"
          target="_black"
        >
          <Image
            src="/assets/images/facebook.png"
            className={style.imageItem}
            alt="facebook logo"
            width={30}
            height={30}
          />
        </a>
        <a
          href="https://www.instagram.com/jdadiffusion/"
          target="_black"
        >
          <Image
            src="/assets/images/instagram_logo.png"
            className={style.imageItem}
            alt="instagram logo"
            width={30}
            height={30}
          />
        </a>
        <a
          href="https://www.tiktok.com/following"
          target="_black"
        >
          <Image
            src="/assets/images/tik_tok.png"
            className={style.imageItem}
            alt="tik tok logo"
            width={30}
            height={30}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/joao-de-almeida-jda-diffusion-7149a71/recent-activity/all/"
          target="_black"
        >
          <Image
            src="/assets/images/linkedin.png"
            className={style.imageItem}
            alt="linkedin logo"
            width={30}
            height={30}
          />
        </a>
      </div>
      <span className={style.copyright}>
        Copyright (c) JDA Diffusion | 2024
      </span>
    </div>
  );
}

export default Footer;
