import Image from 'next/image';
import React from 'react';
import S from './Testimonials.module.css'
import underTitle from "/public/img/under-title.svg"
import underTitleMobile from "/public/img/under-title-mobile.svg"
import { Swiper, SwiperSlide } from "swiper/react";
import profile from "/public/img/Home/Profile_Image/profile-1.svg"
import profile2 from "/public/img/Home/Profile_Image/profile-2.svg"
import profile3 from "/public/img/Home/Profile_Image/profile-3.svg"
import { useSwiper } from 'swiper/react';
import { BsArrowRightCircle,BsArrowLeftCircle } from "react-icons/bs";


import { Pagination, Navigation } from "swiper";



const Testimonials = () => {   
    const swiperRef = React.useRef(null);

    return (
        <section id={S.Testimonials}> 
            <div className={`container-fluid ${S.container}`}>

                <div className={`${S.title} d-flex justify-content-center flex-column`}>
                    <h2 className="title text-center">Our Clients Love Us</h2>
                    <Image src={underTitle} alt="" />
                </div>
                <div className={S.sliderContent}>
                    <Swiper
                        ref={swiperRef}
                        slidesPerView={3}
                        slidesPerGroup={3}
                        loop={false}  
                        loopFillGroupWithBlank={true} 
                        // navigation={true} 
                        modules={[Navigation]}
                        className="mySwiper"
                        breakpoints={{
                            340: {
                                slidesPerView: 1.2,
                                autoplay: true,
                            },
                            768: {
                                slidesPerView: 2, 
                            },
                            1024: {
                                slidesPerView: 3, 
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className={S.SingleSlide}>
                                <div className={`text-start ${S.comment}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s.</div>
                                <div className="profile d-flex justify-content-start align-items-center">
                                    <div className={S.profile}>
                                        <Image src={profile} alt="" />
                                    </div>
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <span className={`${S.profile_name} d-block`}>Devid Hill</span>
                                        <span className={`d-block ${S.profile_link}`}>@devid.hill</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={S.SingleSlide}>
                                <div className={`text-start ${S.comment}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s.</div>
                                <div className="profile d-flex justify-content-start align-items-center">
                                    <div className={S.profile}>
                                        <Image src={profile2} alt="" />
                                    </div>
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <span className={`${S.profile_name} d-block`}>Devid Hill</span>
                                        <span className={`d-block ${S.profile_link}`}>@devid.hill</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={S.SingleSlide}>
                                <div className={`text-start ${S.comment}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s.</div>
                                <div className="profile d-flex justify-content-start align-items-center">
                                    <div className={S.profile}>
                                        <Image src={profile3} alt="" />
                                    </div>
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <span className={`${S.profile_name} d-block`}>Devid Hill</span>
                                        <span className={`d-block ${S.profile_link}`}>@devid.hill</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={S.SingleSlide}>
                                <div className={`text-start ${S.comment}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s.</div>
                                <div className="profile d-flex justify-content-start align-items-center">
                                    <div className={S.profile}>
                                        <Image src={profile2} alt="" />
                                    </div>
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <span className={`${S.profile_name} d-block`}>Devid Hill</span>
                                        <span className={`d-block ${S.profile_link}`}>@devid.hill</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={S.SingleSlide}>
                                <div className={`text-start ${S.comment}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s.</div>
                                <div className="profile d-flex justify-content-start align-items-center">
                                    <div className={S.profile}>
                                        <Image src={profile3} alt="" />
                                    </div>
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <span className={`${S.profile_name} d-block`}>Devid Hill</span>
                                        <span className={`d-block ${S.profile_link}`}>@devid.hill</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                    </Swiper>
                    <div className={S.testimonialsBtn}>
                        <button className={S.prev} onClick={() => swiperRef.current.swiper.slidePrev()} ><BsArrowLeftCircle/></button>
                        <button className={S.next} onClick={() => swiperRef.current.swiper.slideNext()}><BsArrowRightCircle/></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;