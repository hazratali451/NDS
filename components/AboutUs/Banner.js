import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import S from './Banner.module.css'
import Dog from "/public/img/About-us/dog.png"
import underTitle from "/public/img/under-title.svg"
import underTitleMobile from "/public/img/under-title-mobile.svg"

const Banner = () => {

    const [deviceWidth, setDeviceWidth] = useState()

    useEffect(() => {
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        setDeviceWidth(width)
    }, [])

    return (
        <header id={S.banner}>
            <div className={S.brcm}>
                <div className="container text-center">
                    <h3 className={S.brc_title}>About Us</h3>
                    <ul className='d-flex m-0 p-0 justify-content-center align-items-center'>
                        <li><Link href={"/"}>Home</Link> </li>
                        <span>/</span>
                        <li>About Us</li>
                    </ul>
                </div>
            </div>
            <div className={S.main}>
                <div className={`container ${S.container}`}>
                    <div className={`row align-items-center ${S.row}`}>
                        <div className="col col-xl-6 col-xxl-7">
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <h2 className={`title ${S.title}`}>Hi, Let Us Introduce Ourselves</h2>
                                <div><Image className={S.under_title} src={deviceWidth && deviceWidth < "767" ? underTitleMobile : underTitle} alt="" /></div>
                            </div>
                            <p className={`${S.content} mb-0 p-0`}>We are a family-owned company with a mission to provide quality animal health care and service to the community. We are committed to providing our customers with the best care possible which is why we have designed a comfortable, pet-friendly, and calm clinic so that you and your pet can relax. <br /> <br />
                                Our veterinary team is committed to educating our clients on how to keep your pets healthy year round, with good nutrition and exercise. We stay on top of the latest advances in veterinary technology and above all, remember that all animals and pets need to be treated with loving care in every check-up, procedure, or surgery. <br /><br />
                                As a full-service animal hospital, we welcome both emergency treatment cases as well as pet patients in need of routine medical, surgical, and dental care. We have many years of experience treating serious conditions and offering regular pet wellness care. We created our clinic with your pet in and mind and that&apos;s why we offer most of the services you pets will need on-site. <br /> <br />
                                We take pride in serving you. And that&apos;s why In every visit, we go above and beyond to not just assist with your pet&apos;s needs but also to offer a number of resources that enable you to learn about how to take better care of your pets. We make ourselves available to answer any questions you may have. Until you visit us in person, below you can meet our amazing pet-loving team that will be happy to welcome you to our clinic.</p>
                        </div>
                        <div className="col col-xl-6 col-xxl-5 text-center">
                            <Image src={Dog} alt="Dog" />
                        </div>
                    </div>
                </div>
            </div>
        </header >
    );
};

export default Banner;