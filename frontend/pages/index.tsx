import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Header from "./components/header";
import About from "./components/about";
import Services from "./components/services";
import Need from "./components/need";
import Contact from "./components/contact";
import MenuBar from "./components/menuBar";
import Footer from "./components/footer";
import Avis from "./components/avis/page";
import ProgressBar from "./components/progressBar";


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <ProgressBar/>
      <MenuBar />
      <Header />
      <About />
      <Services />
      <Need />
      <Avis/>
      <Contact />
      <Footer/>
    </div>
  );
};

export default Home;
