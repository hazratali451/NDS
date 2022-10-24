import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import S from "./Footer.module.css"
import logo from "/public/img//footer-logo.svg"
import emailicon from "/public/img/Home/email-icon.svg"
import facebook from "/public/img/Home/icons/facebook.svg"
import instagram from "/public/img/Home/icons/instagram.svg"
import twitter from "/public/img/Home/icons/twitter.svg"
import Accordion from 'react-bootstrap/Accordion';


const Footer = () => {

    const footerMenu = {
        quickLinks: [
            {
                title: "Home",
                link: "/"
            },
            {
                title: "About Us",
                link: "/"
            },
            {
                title: "Services",
                link: "/"
            },
            {
                title: "Resources",
                link: "/"
            },
            {
                title: "Testimonial",
                link: "/"
            }
        ],
        helpAndSupport: [
            {
                title: "Help Center",
                link: "/"
            },
            {
                title: "Privacy Policy",
                link: "/"
            },
            {
                title: "FAQ",
                link: "/"
            },
            {
                title: "Terms & Conditions",
                link: "/"
            },
            {
                title: "Contact",
                link: "/"
            }
        ]
    }


    return (
        <div id={S.footer}>
            <div className={`container px-md-0 ${S.container}`}>
                <div className="d-lg-flex">
                    <div className={S.first}>
                        <div className={S.logo}>
                            <Image src={logo} alt="Logo" />
                            <div className={`${S.accordionWrapper} d-lg-none`}>
                                <Accordion>
                                    <Accordion.Item className={S.accItem} eventKey="0">
                                        <Accordion.Header className={`${S.accTitle}`}>Quick Link</Accordion.Header>
                                        <Accordion.Body className={S.accbody}>
                                            <ul className='mb-4 p-0'>
                                                {
                                                    footerMenu.quickLinks.map((item, index) => <li key={index}><Link href={item.link}>{item.title}</Link></li>)
                                                }
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item className={S.accItem} eventKey="1">
                                        <Accordion.Header className={`${S.accTitle}`}>Help & Support</Accordion.Header>
                                        <Accordion.Body className={S.accbody}>
                                            <ul className='m-0 p-0'>
                                                {
                                                    footerMenu.helpAndSupport.map((item, index) => <li key={index}><Link href={item.link}>{item.title}</Link></li>)
                                                }
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                        <div className={S.address1}>
                            <div className={S.address}>Address:</div>
                            <address className={S.mainAddress}>12991 Potranco Road Suite 108, San Antonio, TX, 78253, United State</address>
                        </div>
                        <div>
                            <div className={S.address}>Office Hours:</div>
                            <address className={S.mainAddress}>Monday through Friday 8 AM - 5 PM Saturday - Sunday Closed</address>
                        </div>
                        <div>
                            <div className={S.phone}>Phone number: <a href="tel:+(726)888-9024">+(726) 888-9024</a> </div>
                        </div>
                    </div>
                    <div className={`${S.second} d-none d-lg-block`}>
                        <h3 className={S.quickTitle}>Quick Link</h3>
                        <ul className='m-0 p-0'>
                            {
                                footerMenu.quickLinks.map((item, index) => <li key={index}><Link href={item.link}>{item.title}</Link></li>)
                            }
                        </ul>
                    </div>
                    <div className={`${S.third} d-none d-lg-block`}>
                        <h3 className={S.quickTitle}>Help & Support</h3>
                        <ul className='m-0 p-0'>
                            {
                                footerMenu.helpAndSupport.map((item, index) => <li key={index}><Link href={item.link}>{item.title}</Link></li>)
                            }
                        </ul>
                    </div>
                    <div className={S.fourth}>
                        <h3 className={S.newsTitle}>
                            Newsletter
                        </h3>
                        <div className={S.newsDesc}>Let`s us keep you inform about special promotions, office events and more</div>
                        <form action="">
                            <div className={`${S.form} d-flex align-items-center`}>
                                <Image height={21.67} width={17.33} src={emailicon} alt='email icon' /> <input type="text" placeholder='Enter your email address' />
                            </div>
                            <button className="cmn-btn">
                                Subscribe
                            </button>
                            <div className={S.socialBtns}>
                                <a href="https://facebook.com" rel="noreferrer" target="_blank">
                                    <Image src={facebook} alt="facebook icon" />
                                </a>
                                <a href="https://instagram.com" rel="noreferrer" target="_blank">
                                    <Image src={instagram} alt="instagram icon" />
                                </a>
                                <a href="https://twitter.com" rel="noreferrer" target="_blank">
                                    <Image src={twitter} alt="twitter icon" />
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
                <hr />
                <p className={S.copyrightText}>Copyright © 2021 Pawscare by animalhospital. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;