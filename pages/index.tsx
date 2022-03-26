import type { NextPage } from 'next'

import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>La Quinta Pata</title>
        <meta content="Generated by create next app" name="description" />
        <link href="/favicon.ico" rel="icon" />
        <meta content="#01208a" name="theme-color" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Esto será la página inicial xd</h1>
      </main>
    </div>
  )
}

export default Home
