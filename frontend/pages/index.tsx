import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Welcome from "./components/welcome/page";
import MenuBar from "./components/menuBar/page";
import Presentation from "./components/presentation/page";
import Service from "./components/services/page";
import Avis from "./components/avis/page";
import Devis from "./components/devis/page";




const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <MenuBar/>
      <Welcome/>
      <Presentation/>
      <Service/>
      <Avis/>
      <Devis/>
    </div>
  );
};

export default Home;
