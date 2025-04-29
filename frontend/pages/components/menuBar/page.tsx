import Image from 'next/image';
import styles from './menuBar.module.css'

function MenuBar() {
    return ( <div className={styles.container}>
        <div style={{position:"relative", width:'200px', height:'90px',marginLeft:"6vw"}}>
            <Image src='/assets/images/logo.png' alt='jda logo' layout='fill' objectFit='contain'/>
        </div>
        <div className={styles.menuItems}>
            <h1 className={styles.item}>Qui nous sommes ?</h1>
            <h1 className={styles.item}>Nos services</h1>
            <h1 className={styles.item}>Avis</h1>
            <div className={styles.button}>Nous contacter</div>
        </div>
    </div> );
}

export default MenuBar;