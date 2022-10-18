import React, { useEffect, useState } from 'react';
import Icon1 from "/public/img/Home/icons/Icon5.svg"
import Icon2 from "/public/img/Home/icons/Icon6.svg"
import Icon3 from "/public/img/Home/icons/Icon7.svg"
import Icon4 from "/public/img/Home/icons/Icon8.svg"
import Icon5 from "/public/img/Home/icons/Icon9.svg"
import Icon6 from "/public/img/Home/icons/Icon10.svg"
import Styles from './HoWeHelp.module.css'
import Image from 'next/image';
import UnderTitle from "/public/img/under-title.svg"
import UnderTitleMobile from "/public/img/under-title-mobile.svg"

const HoWeHelp = () => {

    const [deviceWidth, setDeviceWidth] = useState()


    useEffect(() => {
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        setDeviceWidth(width)
    }, [])

    const data = [
        {
            title: "Urgent Care",
            icon: Icon1
        },
        {
            title: "Surgery",
            icon: Icon2
        },
        {
            title: "Checkup",
            icon: Icon3
        },
        {
            title: "Dental",
            icon: Icon4
        },
        {
            title: "Spaying",
            icon: Icon5
        },
        {
            title: "Neutering",
            icon: Icon6
        },
    ]
    return (
        <section id={Styles.HowWeHelp}>
            <div className={`container-fluid ${Styles.container}`}>
                <div className="d-flex justify-content-center flex-column align-items-center">
                    <h2 className='title text-center'>How We Help</h2>
                    <Image className='img-fluid' src={deviceWidth < "767" ? UnderTitleMobile : UnderTitle} alt='' />
                </div>
                <div className='d-flex flex-wrap justify-content-center'>
                    <p className={Styles.content}>From simple wellness exams to complex surgeries, our veterinarians and staff are here to serve all your pet&#39;s needs. We provide a full spectrum of on-site services tailored to your pet care and we are confident we can help you.</p>
                </div>
                <div className={`${Styles.static}`}>
                    <div className="d-flex justify-content-center align-items-center">
                        {
                            data.map((item, index) => <div className={Styles.boxWrapper} key={index}>
                                <Image src={item.icon} alt={item.title} />
                                <h3>{item.title}</h3>
                            </div>)
                        }
                    </div>
                </div>
                <div className={`${Styles.button} text-center`}>
                    <button className="cmn-btn">
                        See All Services
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HoWeHelp;