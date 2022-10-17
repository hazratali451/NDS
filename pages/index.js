import Head from 'next/head'
import Navbar from '../components/Global/Navbar/Navbar'
import Banner from '../components/Home/Banner/Banner'
import ChooseUs from '../components/Home/ChooseUs/ChooseUs'


export default function Home() {
  return (
    <main>
      <Head>
        <title>Home -  NDS Animal Hospital</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Banner />
      <ChooseUs />
    </main>
  )
}
