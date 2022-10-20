import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import S from './EasyToFind.module.css'
import underTitle from "/public/img/under-title.svg"
import underTitleMobile from "/public/img/under-title-mobile.svg"
import Link from 'next/link';
import DogAndText from "/public/img/Home/Dog-and-ext.svg"
import Map from "/public/img/Home/Map.svg"
import Dog from "/public/img/Home/dog-bg.svg"

const EasyToFind = () => {

    const [deviceWidth, setDeviceWidth] = useState()


    useEffect(() => {
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        setDeviceWidth(width)
    }, [])
    return (
        <div id={S.easyToFind}>
            <div className="container-fluid p-0 overflow-hidden">
                <div className={`${S.title} d-flex justify-content-center flex-column`}>
                    <h2 className="title text-center">Our Clients Love Us</h2>
                    <Image src={deviceWidth && deviceWidth < "767" ? underTitleMobile : underTitle} alt="" />
                    <p className='text-center'>Our clinic is conveniently located near you</p>
                </div>
                <div className={S.wrapper}>
                    <div className={S.pointer}>
                        <Link href='/'>
                            <Image src={DogAndText} alt="" />
                        </Link>
                    </div>
                    <div>
                        <Image src={Map} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EasyToFind;