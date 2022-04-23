import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>脱人海戦術</title>
        <meta name="description" content="脱人海戦術のトップページ" />
        <meta name="author" content="ar44" />
        <meta name="keywords" content="Python,Cython,C," />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      </main>

    </div>
  )
}

export default Home
