import Head from 'next/head';
import React from 'react';
import Footer from '../components/Global/Footer/Footer';
import Navbar from '../components/Global/Navbar/Navbar';
import PopUp from '../components/Home/PopUp/PopUp';
import Article from '../components/Global/RecentArticle/Article';
import Header from '../components/Services/Header/Header';
import HowWeHelp from '../components/Services/HowWeHelp/HowWeHelp';

const Services = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <PopUp
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <Head>
                <title>Services -  NDS Animal Hospital</title>
            </Head>
            <nav>
                <Navbar setModalShow={setModalShow} />
            </nav>
            <main>
                <Header />
                <HowWeHelp />
                <Article />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Services;