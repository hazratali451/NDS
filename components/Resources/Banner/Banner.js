import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import S from "./Banner.module.css"
import Dog from "/public/img/Resources/dog_image.png"
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
                        <li>Resources</li>
                    </ul>
                </div>
            </div>

            <div className={S.bannerWrapper}>
                <div className={`container ${S.container}`}>
                    <div className="row align-items-center">
                        <div className="col">
                            <Image src={Dog} alt="Dog" />
                        </div>
                        <div className="col">
                            <div className={`d-flex flex-column justify-content-center`}>
                                <h2 className={`title ${S.title}`}>Veterinary Resources</h2>
                                <div><Image className={S.under_title} src={deviceWidth && deviceWidth < "767" ? underTitleMobile : underTitle} alt="" /></div>
                            </div>
                            <p className={S.content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown.</p>
                            <ul className={`p-0 ${S.links}`}>
                                <li>
                                    <span>American Animal Hospital Association</span>
                                    <a href="#">www.Lorem.org</a>
                                </li>
                                <li>
                                    <span>American Animal Hospital Association</span>
                                    <a href="#">www.Lorem.org</a>
                                </li>
                                <li>
                                    <span>American Animal Hospital Association</span>
                                    <a href="#">www.Lorem.org</a>
                                </li>
                                <li>
                                    <span>American Animal Hospital Association</span>
                                    <a href="#">www.Lorem.org</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Banner;