import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import S from "./Footer.module.css"
import logo from "/public/img//footer-logo.svg"
import emailicon from "/public/img/Home/email-icon.svg"
import facebook from "/public/img/Home/icons/facebook.svg"
import instagram from "/public/img/Home/icons/instagram.svg"
import twitter from "/public/img/Home/icons/twitter.svg"

const Footer = () => {
    return (
        <div id={S.footer}>
            <div className={`container ${S.container}`}>
                <div className="d-flex align-items-center">
                    <div className={S.first}>
                        <div className={S.logo}>
                            <Image src={logo} alt="Logo" />
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
                    <div className={S.second}>
                        <h3 className={S.quickTitle}>Quick Link</h3>
                        <ul className='m-0 p-0'>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/">About Us</Link></li>
                            <li><Link href="/">Services</Link></li>
                            <li><Link href="/">Resources</Link></li>
                            <li><Link href="/">Testimonial</Link></li>
                        </ul>
                    </div>
                    <div className={S.third}>
                        <h3 className={S.quickTitle}>Help & Support</h3>
                        <ul className='m-0 p-0'>
                            <li><Link href="/">Help Center</Link></li>
                            <li><Link href="/">Privacy Policy</Link></li>
                            <li><Link href="/">FAQ</Link></li>
                            <li><Link href="/">Terms & Conditions</Link></li>
                            <li><Link href="/">Contact</Link></li>
                        </ul>
                    </div>
                    <div className={S.fourth}>
                        <h3 className={S.newsTitle}>
                            Newsletter
                        </h3>
                        <div className={S.newsDesc}>Let`s us keep you inform about special promotions, office events and more</div>
                        <form action="">
                            <div className={`${S.form} d-flex align-items-center`}>
                                <Image src={emailicon} alt='email icon' /> <input type="text" placeholder='Enter your email address' />
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
            </div>
        </div>
    );
};

export default Footer;