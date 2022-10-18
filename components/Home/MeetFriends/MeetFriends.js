import Image from 'next/image';
import React, { useState, useCallback, useEffect } from 'react';
import Styles from './MeetFriends.module.css'
import underTitle from "/public/img/under-title.svg"
import underTitleMobile from "/public/img/under-title-mobile.svg"
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import GellaryImage1 from "/public/img/Home/Gellary/Img 3.jpg"
import GellaryImage2 from "/public/img/Home/Gellary/Img-2.png"
import GellaryImage3 from "/public/img/Home/Gellary/Img-3.png"
import GellaryImage4 from "/public/img/Home/Gellary/Img-4.png"
import GellaryImage5 from "/public/img/Home/Gellary/Img-5.png"
import GellaryImage6 from "/public/img/Home/Gellary/Img-6.png"

const MeetFriends = () => {
    const data = [GellaryImage1, GellaryImage2, GellaryImage3, GellaryImage4, GellaryImage5, GellaryImage6];

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };



    const [deviceWidth, setDeviceWidth] = useState()


    useEffect(() => {
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        setDeviceWidth(width)
    }, [])
    return (
        <section id={Styles.mission}>
            <div className={`${Styles.container} container-fluid`}>
                <div className={`${Styles.title} d-flex justify-content-center flex-column`}>
                    <h2 className="title text-center">Meet Our Friends</h2>
                    <Image src={deviceWidth && deviceWidth < "767" ? underTitleMobile : underTitle} alt="" />
                </div>
                <div className='d-flex justify-content-center'>
                    <p className={Styles.content}>Each visit to our office is unique and we love taking pictures with our furry friends. Feel free to stop by our office and say hello! We would love to build some memories with you too.</p>
                </div>

                <div id={Styles.ajksfhdasf}>
                    <Gallery columns={deviceWidth && deviceWidth < 767 ? 2 : 3} direction={'column'} margin={deviceWidth && deviceWidth < 1100 ? 7 : deviceWidth && deviceWidth < 767 ? 4 : 15} photos={data} onClick={openLightbox} />
                    <ModalGateway>
                        {viewerIsOpen ? (
                            <Modal onClose={closeLightbox}>
                                <Carousel
                                    currentIndex={currentImage}
                                    views={data.map(x => ({
                                        ...x,
                                        srcset: x.srcSet,
                                        caption: x.title
                                    }))}
                                />
                            </Modal>
                        ) : null}
                    </ModalGateway>
                </div>

            </div>
        </section>
    );
};

export default MeetFriends;