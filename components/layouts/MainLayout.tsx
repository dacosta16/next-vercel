import Head from 'next/head';
import { FC, ReactNode } from 'react';
import Navbar from '../Navbar';
import styles from './MainLayout.module.css';

interface Props {
  children: ReactNode,
}

const MainLayout:FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home Next App</title>
        <meta name="description" content="Home description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className={styles.main}>

        { children }

      </main>
    </>
  )
}

export default MainLayout;