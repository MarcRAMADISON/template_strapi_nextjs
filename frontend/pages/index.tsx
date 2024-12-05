import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./components/header";
import About from "./components/about";
import Services from "./components/services";
import Need from "./components/need";
import Contact from "./components/contact";
import MenuBar from "./components/menuBar";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <MenuBar />

      <Header />
      <About />
      <Services />
      <Need />
      <Contact />
    </div>
  );
};

export default Home;
