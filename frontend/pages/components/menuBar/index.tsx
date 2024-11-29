import Image from 'next/image';
import style from './menuBar.module.css'

function MenuBar() {
    return ( <div className={style.menuContainer}>
        <Image style={{zIndex:'999',marginLeft:'50px'}} src='/assets/images/logo.svg' width={150} height={150} alt='jda logo'/>
        <div className={style.menuItems}>
            <div className={style.menuItem}>Qui nous sommes?</div>
            <div className={style.menuItem}>Nos services</div>
            <div className={style.menuItem}>Vos besoins</div>
            <div className={style.menuItem} style={{color:'#f3dd52'}}>Nous contacter</div>
        </div>
    </div> );
}

export default MenuBar;