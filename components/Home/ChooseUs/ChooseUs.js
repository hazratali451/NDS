import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Styles from './ChooseUs.module.css'
import BgImage from '/public/img/Home/dog-cat-bg.webp'
import TitleBtm from '/public/img/under-title.svg'
import icon1 from '/public/img/Home/icons/Icon1.svg'
import icon2 from '/public/img/Home/icons/Icon2.svg'
import TitleBtmMobile from '/public/img/under-title-mobile.svg'

const ChooseUs = () => {

    const [deviceWidth, setDeviceWidth] = useState()


    useEffect(() => {
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        setDeviceWidth(width)
    }, [])

    const data = [
        {
            title: "Convenient Services",
            icon: icon1,
            content: false,
            list: true
        },
        {
            title: "Urgent Care",
            icon: icon2,
            content: "We know that some care can’t wait until the next routine exam. That’s why we offer prompt care when you need it most. Monday to Friday, 8:00 am-5:00 pm.",
            list: false
        },
        {
            title: "Hablamos Español",
            icon: icon2,
            content: "Nosotros nos comunicamos en el idioma de nuestra comunidad.",
            list: false
        },
        {
            title: "We Care",
            icon: icon2,
            content: "We believe in quality animal health care personalized to your pet's needs.",
            list: false
        },
    ]






    return (
        <section className={Styles.chooseus}>
            <div className={`container ${Styles.container}`}>
                <div className="row">
                    <div className="d-none d-lg-flex col-md-5 col-xl-6 d-flex justiy-content-center align-items-center">
                        <div>
                            <Image className='w-100' src={BgImage} alt='' />
                        </div>
                    </div>
                    <div className="col-12 col-lg-7 col-xl-6">
                        <div className={`${Styles.title}`}>
                            <h2 className="title">
                                Why Choose us
                            </h2>
                            <Image src={deviceWidth && deviceWidth < "767" ? TitleBtmMobile : TitleBtm} alt="Title Bottom" />
                        </div>
                        <p className={Styles.shortContent}>NDS Animal Hospital is here to serve you and your pet. Because we believe every urgent or wellness visit should be personalized to your needs.</p>

                        <div className={`${Styles.mobileImage} d-lg-none`}>
                            <Image src={BgImage} alt='' />
                        </div>

                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            {
                                data.map((item, i) => <div key={i} className="col">
                                    <div className=" border-0 card h-100">
                                        <div className={`card-body ${Styles.cardBody}`}>
                                            <div className={Styles.CardIcon} >
                                                <Image src={item.icon} alt='' />
                                            </div>
                                            <h3 className={Styles.cardTitle}>{item.title}</h3>
                                            {item.list && <ol className='ps-3 m-0'>
                                                <li>Easy Appointments</li>
                                                <li>Curbside Drop-off
                                                </li>
                                                <li>Walkings
                                                </li>
                                            </ol>}
                                            {item.content && <p className={`${Styles.cardConente} m-0`}>{item.content}</p>}
                                        </div>
                                    </div>
                                </div>)
                            }


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;