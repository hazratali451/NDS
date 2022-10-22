import Head from 'next/head';
import React from 'react';
import Banner from '../components/AboutUs/Banner';
import Footer from '../components/Global/Footer/Footer';
import Navbar from '../components/Global/Navbar/Navbar';
import ChooseUs from '../components/Home/ChooseUs/ChooseUs';
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
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav>
                <Navbar setModalShow={setModalShow} />
                <Banner />
            </nav>
            <main>

            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default AboutUs;