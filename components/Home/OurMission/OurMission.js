import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Styles from './OurMission.module.css'
import UnderTitle from '/public/img/under-title.svg'
import UnderTitleMobile from '/public/img/under-title-mobile.svg'
import doctorPic from "/public/img/Home/Img.png"

const OurMission = () => {


    const [deviceWidth, setDeviceWidth] = useState()


    useEffect(() => {
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        setDeviceWidth(width)
    }, [])

    return (
        <section id={Styles.OurMission}>
            <div className={`container ${Styles.container}`}>
                <div className={`row align-items-center  ${Styles.row}`}>
                    <div className="col-12 col-lg-6">
                        <div className={Styles.title}>
                            <h2 className="title">Our Mission</h2>
                            <Image src={deviceWidth && deviceWidth < "767" ? UnderTitleMobile : UnderTitle} alt='' />
                        </div>
                        <p className={Styles.content}>We are a family-owned company with a mission to provide quality animal health care and service to the community. We believe in personal and individualized care for you and your pet which is why we have designed a comfortable, pet-friendly, and calm clinic so that you and your pet can relax. Our #1 goal is to serve you, and in doing so, become the provider of choice for you and your furry friend.</p>
                        <div className={Styles.buttonCenter}>
                            <button className={`cmn-btn ${Styles.button}`}>
                                About Us
                            </button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="image">
                            <Image src={doctorPic} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurMission;