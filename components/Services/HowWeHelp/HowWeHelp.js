import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import S from "./HowWeHelp.module.css"
import UnderTitle from "/public/img/under-title.svg"
import UnderTitleMobile from "/public/img/under-title-mobile.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import icon1 from "/public/img/Services/Icons/Icon.svg"
import icon2 from "/public/img/Services/Icons/Icon-1.svg"
import icon3 from "/public/img/Services/Icons/Icon-2.svg"
import icon4 from "/public/img/Services/Icons/Icon-3.svg"
import icon5 from "/public/img/Services/Icons/Icon-4.svg"
import icon6 from "/public/img/Services/Icons/Icon-5.svg"
import icon7 from "/public/img/Services/Icons/Icon-6.svg"
import icon8 from "/public/img/Services/Icons/Icon-7.svg"
import { Navigation } from "swiper";

const HowWeHelp = () => {
    const swiperRef = React.useRef(null);
    const swiperRef2 = React.useRef(null);
    const [deviceWidth, setDeviceWidth] = useState()


    useEffect(() => {
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        setDeviceWidth(width)
    }, [])

    const data = [
        {
            title: "Dental",
            icon: icon8,
            description: "Dental disease is one of the most common health problems in dogs and cats. It's important to keep your pet's teeth clean and healthy to prevent gum disease, tooth loss, and other health problems. Our veterinarians can help you create a pet dental plan."
        },
        {
            title: "Surgery",
            icon: icon7,
            description: "Sometimes, pet surgery is necessary to treat an illness or injury. Our team of veterinarians is experienced in performing a variety of pet surgeries. We'll work with you to ensure that your pet has a successful surgery and recovery."
        },
        {
            title: "Vaccines",
            icon: icon6,
            description: "Vaccines help protect your pet from a variety of diseases. We offer a variety of vaccines at our vet center, including rabies, distemper, and Bordetella."
        },
        {
            title: "Bloodwork",
            icon: icon5,
            description: "Bloodwork is an important part of pet wellness care. It can help our veterinarians identify health problems early. We offer bloodwork services at our vet center."
        },
        {
            title: "Wellness Care and Check-Ups",
            icon: icon4,
            description: "We offer wellness care to help keep your pet healthy. Our veterinarians will work with you to create a custom wellness plan for your pet. We also offer annual check-ups to help catch any health problems early."
        },
        {
            title: "Spaying or Neutering Your Pet",
            icon: icon3,
            description: "Spaying or neutering your pet can help it live a longer, healthier life. It can also help reduce the number of unwanted animals in shelters. Our veterinarians can perform spay and neuter surgery at our vet center."
        },
        {
            title: "Microchipping",
            icon: icon2,
            description: "Microchipping is a safe and permanent way to identify your pet. If your pet is lost, a microchip can help it get back home to you."
        },
        {
            title: "Euthanasia ",
            icon: icon1,
            description: "Saying goodbye to a beloved pet is never easy. Our team is here to help you through this difficult time."
        },
    ]

    const data2 = [
        {
            title: "Wellness Care and Check-Ups",
            icon: icon4,
            description: "We offer wellness care to help keep your pet healthy. Our veterinarians will work with you to create a custom wellness plan for your pet. We also offer annual check-ups to help catch any health problems early."
        },
        {
            title: "Spaying or Neutering Your Pet",
            icon: icon3,
            description: "Spaying or neutering your pet can help it live a longer, healthier life. It can also help reduce the number of unwanted animals in shelters. Our veterinarians can perform spay and neuter surgery at our vet center."
        },
        {
            title: "Microchipping",
            icon: icon2,
            description: "Microchipping is a safe and permanent way to identify your pet. If your pet is lost, a microchip can help it get back home to you."
        },
        {
            title: "Euthanasia ",
            icon: icon1,
            description: "Saying goodbye to a beloved pet is never easy. Our team is here to help you through this difficult time."
        }, {
            title: "Dental",
            icon: icon8,
            description: "Dental disease is one of the most common health problems in dogs and cats. It's important to keep your pet's teeth clean and healthy to prevent gum disease, tooth loss, and other health problems. Our veterinarians can help you create a pet dental plan."
        },
        {
            title: "Surgery",
            icon: icon7,
            description: "Sometimes, pet surgery is necessary to treat an illness or injury. Our team of veterinarians is experienced in performing a variety of pet surgeries. We'll work with you to ensure that your pet has a successful surgery and recovery."
        },
        {
            title: "Vaccines",
            icon: icon6,
            description: "Vaccines help protect your pet from a variety of diseases. We offer a variety of vaccines at our vet center, including rabies, distemper, and Bordetella."
        },
        {
            title: "Bloodwork",
            icon: icon5,
            description: "Bloodwork is an important part of pet wellness care. It can help our veterinarians identify health problems early. We offer bloodwork services at our vet center."
        }
    ]

    return (
        <section id={S.how_we_help}>
            <div className={`container ${S.container}`}>
                <div className="d-flex justify-content-center flex-column align-items-center">
                    <h2 className='title text-center'>How We Help</h2>
                    <Image src={deviceWidth && deviceWidth < "767" ? UnderTitleMobile : UnderTitle} alt='' />
                </div>
                <div className={S.content}>
                    <p>From simple wellness exams to complex surgeries, our veterinarians and staff are here to serve all your pet&apos;s needs. We provide a full spectrum of on-site services tailored to your pet care and we are confident we can help you.</p>
                </div>
                <div className={`${S.sliderContent} ${S.firstSliders}`}>
                    <Swiper
                        ref={swiperRef}
                        slidesPerView={4}
                        slidesPerGroup={4}
                        loop={false}
                        loopFillGroupWithBlank={true}
                        // navigation={true} 
                        modules={[Navigation]}
                        className="mySwiper"

                        breakpoints={{
                            1399: {
                                slidesPerView: 4,
                                slidesPerGroup: 4,
                                spaceBetween: 30
                            },
                            1040: {
                                slidesPerView: 3,
                                slidesPerGroup: 3,
                                spaceBetween: 25
                            },
                            767: {
                                slidesPerView: 2.15,
                                slidesPerGroup: 2,
                                spaceBetween: 15
                            },
                            351: {
                                slidesPerView: 1.06,
                                slidesPerGroup: 1,
                                spaceBetween: 10
                            },

                        }}
                    >

                        {
                            data.map((item, index) => <SwiperSlide className={S.main_slider_wrapper} key={index}>
                                <div className={`${S.SingleSlide}`}>
                                    <div className=" d-flex flex-column justify-content-center align-items-center">
                                        <div className={S.profile}>
                                            <Image src={item.icon} alt="" />
                                        </div>
                                        <svg className={S.svg} width="261" height="26" viewBox="0 0 261 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect opacity="0.2" y="11.3735" width="97.5908" height="1.62651" fill="#0062AF" />
                                            <rect opacity="0.2" x="162.651" y="11.3735" width="97.5908" height="1.62651" fill="#0062AF" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M127.437 0H132.815C133.367 0.00161475 133.896 0.22158 134.287 0.611932C134.678 1.00228 134.898 1.53136 134.901 2.08381V8.22167H141.037C141.589 8.22329 142.119 8.44368 142.51 8.83469C142.901 9.22571 143.121 9.75557 143.123 10.3085V15.6884C143.121 16.2414 142.901 16.7712 142.51 17.1622C142.119 17.5533 141.589 17.7736 141.037 17.7753H134.901V23.9131C134.899 24.4661 134.679 24.996 134.288 25.387C133.897 25.778 133.368 25.9984 132.815 26H127.437C126.884 25.9984 126.354 25.778 125.963 25.387C125.573 24.996 125.352 24.4661 125.351 23.9131V17.7753H119.196C118.644 17.7736 118.114 17.5533 117.723 17.1622C117.332 16.7712 117.112 16.2414 117.11 15.6884V10.3208C117.112 9.76785 117.332 9.23798 117.723 8.84696C118.114 8.45595 118.644 8.23557 119.196 8.23395H125.332V2.09608C125.335 1.54364 125.555 1.01456 125.946 0.62421C126.337 0.233858 126.866 0.0138931 127.418 0.0122784" fill="#CA0000" />
                                            <path d="M117.118 12.9417H121.33L122.41 11.5668L123.024 10.7812L123.628 11.5699L124.687 12.9417H126.524H126.892L127.129 13.2394L127.411 13.5984L129.295 6.79769L130.773 6.76086L132.807 12.9417H133.936L135.421 10.4773L136.071 9.40015L136.74 10.4681L138.283 12.9417H143.131V14.4915H137.854H137.427L137.2 14.1263L136.096 12.3555L135.035 14.1171L134.807 14.4915H134.372H132.249H131.691L131.513 13.9575L130.101 9.66714L128.494 15.4736L128.089 16.9374L127.144 15.7436L126.153 14.4915H124.309H123.932L123.699 14.1877L123.012 13.2977L122.312 14.1908L122.079 14.4915H121.705H117.118V12.9417Z" fill="white" />
                                        </svg>

                                        <h5 className={S.main_title}>{item.title}</h5>
                                        <p className={S.main_description}>{item.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }

                    </Swiper>
                    <div className={S.testimonialsBtn}>
                        <button className={S.prev} onClick={() => swiperRef.current.swiper.slidePrev()} ><BsArrowLeftCircle /></button>
                        <button className={S.next} onClick={() => swiperRef.current.swiper.slideNext()}><BsArrowRightCircle /></button>
                    </div>
                </div>


                {/* Second slider */}

                <div className={S.sliderContent}>
                    <Swiper
                        ref={swiperRef2}
                        slidesPerView={4}
                        slidesPerGroup={4}
                        loop={false}
                        loopFillGroupWithBlank={true}
                        // navigation={true} 
                        modules={[Navigation]}
                        className="mySwiper"

                        breakpoints={{
                            1399: {
                                slidesPerView: 4,
                                slidesPerGroup: 4,
                                spaceBetween: 30
                            },
                            1040: {
                                slidesPerView: 3,
                                slidesPerGroup: 3,
                                spaceBetween: 25
                            },
                            767: {
                                slidesPerView: 2.15,
                                slidesPerGroup: 2,
                                spaceBetween: 15
                            },
                            351: {
                                slidesPerView: 1.06,
                                slidesPerGroup: 1,
                                spaceBetween: 10
                            },

                        }}
                    >

                        {
                            data2.map((item, index) => <SwiperSlide className={S.main_slider_wrapper} key={index}>
                                <div className={`${S.SingleSlide}`}>
                                    <div className=" d-flex flex-column justify-content-center align-items-center">
                                        <div className={S.profile}>
                                            <Image src={item.icon} alt="" />
                                        </div>
                                        <svg className={S.svg} width="261" height="26" viewBox="0 0 261 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect opacity="0.2" y="11.3735" width="97.5908" height="1.62651" fill="#0062AF" />
                                            <rect opacity="0.2" x="162.651" y="11.3735" width="97.5908" height="1.62651" fill="#0062AF" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M127.437 0H132.815C133.367 0.00161475 133.896 0.22158 134.287 0.611932C134.678 1.00228 134.898 1.53136 134.901 2.08381V8.22167H141.037C141.589 8.22329 142.119 8.44368 142.51 8.83469C142.901 9.22571 143.121 9.75557 143.123 10.3085V15.6884C143.121 16.2414 142.901 16.7712 142.51 17.1622C142.119 17.5533 141.589 17.7736 141.037 17.7753H134.901V23.9131C134.899 24.4661 134.679 24.996 134.288 25.387C133.897 25.778 133.368 25.9984 132.815 26H127.437C126.884 25.9984 126.354 25.778 125.963 25.387C125.573 24.996 125.352 24.4661 125.351 23.9131V17.7753H119.196C118.644 17.7736 118.114 17.5533 117.723 17.1622C117.332 16.7712 117.112 16.2414 117.11 15.6884V10.3208C117.112 9.76785 117.332 9.23798 117.723 8.84696C118.114 8.45595 118.644 8.23557 119.196 8.23395H125.332V2.09608C125.335 1.54364 125.555 1.01456 125.946 0.62421C126.337 0.233858 126.866 0.0138931 127.418 0.0122784" fill="#CA0000" />
                                            <path d="M117.118 12.9417H121.33L122.41 11.5668L123.024 10.7812L123.628 11.5699L124.687 12.9417H126.524H126.892L127.129 13.2394L127.411 13.5984L129.295 6.79769L130.773 6.76086L132.807 12.9417H133.936L135.421 10.4773L136.071 9.40015L136.74 10.4681L138.283 12.9417H143.131V14.4915H137.854H137.427L137.2 14.1263L136.096 12.3555L135.035 14.1171L134.807 14.4915H134.372H132.249H131.691L131.513 13.9575L130.101 9.66714L128.494 15.4736L128.089 16.9374L127.144 15.7436L126.153 14.4915H124.309H123.932L123.699 14.1877L123.012 13.2977L122.312 14.1908L122.079 14.4915H121.705H117.118V12.9417Z" fill="white" />
                                        </svg>

                                        <h5 className={S.main_title}>{item.title}</h5>
                                        <p className={S.main_description}>{item.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }

                    </Swiper>
                    <div className={S.testimonialsBtn}>
                        <button className={S.prev} onClick={() => swiperRef2.current.swiper.slidePrev()} ><BsArrowLeftCircle /></button>
                        <button className={S.next} onClick={() => swiperRef2.current.swiper.slideNext()}><BsArrowRightCircle /></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeHelp;