import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import S from "./CoreValue.module.css"
import underTitle from "/public/img/under-title.svg"
import underTitleMobile from "/public/img/under-title-mobile.svg"
import icon1 from "/public/img/About-us/icons/Icon.svg"
import icon2 from "/public/img/About-us/icons/Icon (1).svg"
import icon3 from "/public/img/About-us/icons/Icon (2).svg"


const CoreValue = () => {
    const [deviceWidth, setDeviceWidth] = useState()
    useEffect(() => {
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        setDeviceWidth(width)
    }, [])


    const cards = [
        {
            title: "Service",
            description: "We believe in our community and believe in offering a service that will make a difference.",
            icon: icon1
        },
        {
            title: "Love for Pets",
            description: "We love pets because we understand they are an important part of most families. And we know that when a pet is sick, it can be a stressful experience so we want to be there to help.",
            icon: icon2
        },
        {
            title: "Relationship",
            description: "We know the importance relationships play in our lives. That's why we want to build lasting bonds with you and your pet beyond just another vet clinic.",
            icon: icon3
        }
    ]


    return (
        <section id={S.core_value}>
            <div className={`container ${S.container}`}>
                <div className={`d-flex flex-column justify-content-center text-center ${S.title_wrapper}`}>
                    <h2 className={`title`}>Our Core Value</h2>
                    <div><Image className={S.under_title} src={deviceWidth && deviceWidth < "767" ? underTitleMobile : underTitle} alt="" /></div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <p className={S.content}>Learn more about the values that drive our team and why we strive to provide the best customer experience.</p>
                </div>


                <div className={`row ${S.row}`}>

                    {cards.map((card, index) => <SingleItem key={index} card={card} />)}
                </div>


            </div>
        </section>
    );
};

export default CoreValue;



const SingleItem = ({ card }) => {
    return (
        <div className={`col p-0 m-0 ${S.bg_will_be}`}>
            <div className={`card  m-0 h-100 border-0 ${S.main_single_wrapper}`}>
                <div className={S.single_box}>
                    <div className="icon d-flex justify-content-center">
                        <Image src={card.icon} alt={card.title} />
                    </div>
                    <h5 className={S.box_title}>{card.title}</h5>
                    <div className={`d-flex justify-content-center ${S.devider}`}>
                        <svg width="256" height="26" viewBox="0 0 256 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.2" y="11" width="96" height="2" fill="#C0C0C0" />
                            <rect opacity="0.2" x="160" y="11" width="96" height="2" fill="#C0C0C0" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M125.36 0H130.65C131.193 0.00161475 131.714 0.22158 132.098 0.611932C132.483 1.00228 132.7 1.53136 132.702 2.08381V8.22167H138.738C139.282 8.22329 139.803 8.44368 140.187 8.83469C140.572 9.22571 140.788 9.75557 140.79 10.3085V15.6884C140.788 16.2414 140.572 16.7712 140.187 17.1622C139.803 17.5533 139.282 17.7736 138.738 17.7753H132.702V23.9131C132.701 24.4661 132.484 24.996 132.099 25.387C131.715 25.778 131.194 25.9984 130.65 26H125.36C124.816 25.9984 124.295 25.778 123.91 25.387C123.526 24.996 123.309 24.4661 123.308 23.9131V17.7753H117.254C116.71 17.7736 116.189 17.5533 115.804 17.1622C115.42 16.7712 115.203 16.2414 115.202 15.6884V10.3208C115.203 9.76785 115.42 9.23798 115.804 8.84696C116.189 8.45595 116.71 8.23557 117.254 8.23395H123.29V2.09608C123.292 1.54364 123.509 1.01456 123.893 0.62421C124.278 0.233858 124.798 0.0138931 125.342 0.0122784" fill="#CA0000" />
                            <path d="M115.21 12.9418H119.354L120.416 11.5669L121.02 10.7813L121.614 11.57L122.656 12.9418H124.463H124.825L125.058 13.2395L125.335 13.5986L127.188 6.79781L128.643 6.76099L130.644 12.9418H131.754L133.215 10.4775L133.855 9.40027L134.513 10.4683L136.031 12.9418H140.799V14.4916H135.608H135.189L134.965 14.1264L133.879 12.3556L132.835 14.1172L132.611 14.4916H132.183H130.095H129.545L129.37 13.9576L127.982 9.66727L126.401 15.4737L126.002 16.9376L125.073 15.7438L124.098 14.4916H122.284H121.913L121.684 14.1878L121.008 13.2978L120.32 14.1909L120.09 14.4916H119.722H115.21V12.9418Z" fill="#FAFAFA" />
                        </svg>
                    </div>
                    <p className={S.card_content}>{card.description}</p>
                </div>
            </div>
        </div>
    )
}