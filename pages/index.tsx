import Head from 'next/head'
import styles from '../styles/Home.module.css'
import FotoHome from './component/FotoHome'
import JudulHome from './component/JudulHome'
import LogoHome from './component/LogoHome'
import NamaHome from './component/NamaHome'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LogoHome/>
      <JudulHome/>
      <NamaHome/>
      <FotoHome/>
    </div>
  )
}
