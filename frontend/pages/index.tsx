import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/header'
import About from './components/about'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <About/>
    </div>
  )
}

export default Home
