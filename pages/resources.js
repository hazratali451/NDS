import Head from 'next/head';
import React, { useState } from 'react';
import Footer from '../components/Global/Footer/Footer';
import Navbar from '../components/Global/Navbar/Navbar';
import Article from '../components/Global/RecentArticle/Article';
import PopUp from '../components/Home/PopUp/PopUp';
import Banner from '../components/Resources/Banner/Banner';

const resources = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <PopUp
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <Head>
                <title>Resources -  NDS Animal Hospital</title>
            </Head>
            <nav>
                <Navbar setModalShow={setModalShow} />
            </nav>
            <main>
                <Banner />
                <Article />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default resources;