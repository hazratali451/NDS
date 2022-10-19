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



import { Pagination, Navigation } from "swiper";



const Testimonials = () => {
    const swiper = useSwiper();
    console.log(swiper)
    return (
        <section id={S.Testimonials}>
            <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
            <div className={`container-fluid ${S.container}`}>

                <div className={`${S.title} d-flex justify-content-center flex-column`}>
                    <h2 className="title text-center">Our Clients Love Us</h2>
                    <Image src={underTitle} alt="" />
                </div>
                <Swiper
                    slidesPerView={3}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
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
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;