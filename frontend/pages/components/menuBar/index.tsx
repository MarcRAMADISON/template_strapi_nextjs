import Image from "next/image";
import style from "./menuBar.module.css";
import { handleNavigation } from "../../../utils/utils";
import { useState } from "react";

function MenuBar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    const idMenu = document.querySelector("#menuBlockId") as any;
    const burgerMenu = document.querySelector("#burger_menu_id");

    if(burgerMenu && idMenu){
      const spans = burgerMenu.querySelectorAll("span");

      setShowMenu((prev) => {
        if (prev) {
          spans[0].style.transform = "";
          spans[1].style.opacity = "";
          spans[2].style.transform = "";
          idMenu.style.height = "0px";
          idMenu.style.opacity = "0";
        } else {
          spans[0].style.transform = "translateY(13px) rotate(45deg)";
          spans[1].style.opacity = "0";
          spans[2].style.transform = "translateY(-13px) rotate(-45deg)";
          idMenu.style.height = "300px";
          idMenu.style.opacity = "1";
        }
  
        return !prev;
      });
    }

   
  };

  const changeNavigation=(section:string)=>{
    const idMenu = document.querySelector("#menuBlockId") as any;
    const burgerMenu = document.querySelector("#burger_menu_id");

    if(burgerMenu && idMenu){
      handleNavigation(section)
      const spans = burgerMenu.querySelectorAll("span");

          spans[0].style.transform = "";
          spans[1].style.opacity = "";
          spans[2].style.transform = "";
          idMenu.style.height = "0px";
          idMenu.style.opacity = "0";
        }
  }

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
            onClick={(e) => handleNavigation("avis")}
          >
            Avis
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
            className={style.burger_menu}
            id="burger_menu_id"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        
        
          <div className={style.menuItemsMobile} id="menuBlockId">
            <span
              className={style.menuItem}
              onClick={(e) => {
                changeNavigation("about");
                setShowMenu(false);
               
              }}
            >
              Qui nous sommes?
            </span>
            <span
              className={style.menuItem}
              onClick={(e) => {
                changeNavigation("services");
                setShowMenu(false);
          
              }}
            >
              Nos services
            </span>
            <span
              className={style.menuItem}
              onClick={(e) => {
                changeNavigation("need");
                setShowMenu(false);
               
              }}
            >
              Vos besoins
            </span>
            <span
              className={style.menuItem}
              onClick={(e) => {
                changeNavigation("avis");
                setShowMenu(false);
               
              }}
            >
              Avis
            </span>
            <span
              className={style.menuItem}
              onClick={(e) => {
                changeNavigation("contact");
                setShowMenu(false);
                
              }}
              style={{ color: "#f3dd52" }}
            >
              Nous contacter
            </span>
          </div>
        
      </div>
    </>
  );
}

export default MenuBar;
