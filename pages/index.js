import Head from 'next/head'
import React from 'react'
import { Button } from 'react-bootstrap'
import Footer from '../components/Global/Footer/Footer'
import Navbar from '../components/Global/Navbar/Navbar'
import Banner from '../components/Home/Banner/Banner'
import ChooseUs from '../components/Home/ChooseUs/ChooseUs'
import EasyToFind from '../components/Home/EasyToFind/EasyToFind'
import HoWeHelp from '../components/Home/HoWeHelp/HoWeHelp'
import MeetFriends from '../components/Home/MeetFriends/MeetFriends'
import OurMission from '../components/Home/OurMission/OurMission'
import PopUp from '../components/Home/PopUp/PopUp'
import Testimonials from '../components/Home/Testimonials/Testimonials'


export default function Home() {

  const [modalShow, setModalShow] = React.useState(false);


  return (
    <>
      <PopUp
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Head>
        <title>Home -  NDS Animal Hospital</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar setModalShow={setModalShow} />
      <main>
        <Banner setModalShow={setModalShow} />
        <ChooseUs />
        <HoWeHelp />
        <OurMission />
        <MeetFriends />
        <Testimonials />
        <EasyToFind setModalShow={setModalShow} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
