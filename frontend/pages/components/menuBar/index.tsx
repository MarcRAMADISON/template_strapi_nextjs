import Image from "next/image";
import style from "./menuBar.module.css";
import { handleNavigation } from "../../../utils/utils";
import { useState } from "react";

function MenuBar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <>
      <div className={style.upButton} onClick={()=>handleNavigation('header')}>
      <Image
          src="/assets/images/upIcon.png"
          width={15}
          height={10}
          alt="jda logo"
        />
      </div>
      <div className={style.menuContainer}>
        <Image
          style={{ zIndex: "999", marginLeft: "50px" }}
          src="/assets/images/logo.png"
          width={150}
          height={150}
          alt="jda logo"
        />
        <div className={style.menuItems}>
          <div
            className={style.menuItem}
            onClick={(e) => handleNavigation("about")}
          >
            Qui nous sommes?
          </div>
          <div
            className={style.menuItem}
            onClick={(e) => handleNavigation("services")}
          >
            Nos services
          </div>
          <div
            className={style.menuItem}
            onClick={(e) => handleNavigation("need")}
          >
            Vos besoins
          </div>
          <div
            className={style.menuItem}
            onClick={(e) => handleNavigation("contact")}
            style={{ color: "#f3dd52" }}
          >
            Nous contacter
          </div>
        </div>
      </div>

      <div className={style.menuMobile}>
        <div
          className={style.menuBarMobile}
          onClick={(e) => setShowMenu((p) => !p)}
        >
          <Image
            style={{ borderBottom: "1px solid #fff" }}
            src="/assets/images/burger_menu.png"
            alt="burger menu"
            width={30}
            height={15}
          />
        </div>
        {showMenu && (
          <div className={style.menuItemsMobile}>
            <span
              className={style.menuItem}
              onClick={(e) => {
                handleNavigation("about");
                setShowMenu(false);
              }}
            >
              Qui nous sommes?
            </span>
            <span
              className={style.menuItem}
              onClick={(e) => {
                handleNavigation("services");
                setShowMenu(false);
              }}
            >
              Nos services
            </span>
            <span
              className={style.menuItem}
              onClick={(e) => {
                handleNavigation("need");
                setShowMenu(false);
              }}
            >
              Vos besoins
            </span>
            <span
              className={style.menuItem}
              onClick={(e) => {
                handleNavigation("contact");
                setShowMenu(false);
              }}
              style={{ color: "#f3dd52" }}
            >
              Nous contacter
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export default MenuBar;
