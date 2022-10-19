import Head from 'next/head'
import Navbar from '../components/Global/Navbar/Navbar'
import Banner from '../components/Home/Banner/Banner'
import ChooseUs from '../components/Home/ChooseUs/ChooseUs'
import EasyToFind from '../components/Home/EasyToFind/EasyToFind'
import HoWeHelp from '../components/Home/HoWeHelp/HoWeHelp'
import MeetFriends from '../components/Home/MeetFriends/MeetFriends'
import OurMission from '../components/Home/OurMission/OurMission'
import Testimonials from '../components/Home/Testimonials/Testimonials'


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
      <HoWeHelp />
      <OurMission />
      <MeetFriends />
      <Testimonials />
      <EasyToFind />
    </main>
  )
}
