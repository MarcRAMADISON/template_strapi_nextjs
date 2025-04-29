import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Welcome from "./components/welcome/page";
import MenuBar from "./components/menuBar/page";
import Presentation from "./components/presentation/page";
import Service from "./components/services/page";




const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <MenuBar/>
      <Welcome/>
      <Presentation/>
      <Service/>
    </div>
  );
};

export default Home;
