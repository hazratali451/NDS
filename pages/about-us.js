import Head from 'next/head';
import React from 'react';
import Banner from '../components/AboutUs/Banner/Banner';
import CoreValue from '../components/AboutUs/CoreValue/CoreValue';
import Team from '../components/AboutUs/Team/Team';
import Footer from '../components/Global/Footer/Footer';
import Navbar from '../components/Global/Navbar/Navbar';
import PopUp from '../components/Home/PopUp/PopUp';

const AboutUs = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <PopUp
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <Head>
                <title>About Us -  NDS Animal Hospital</title>
            </Head>
            <nav>
                <Navbar setModalShow={setModalShow} />
            </nav>
            <main>
                <Banner />
                <Team />
                <CoreValue />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default AboutUs;