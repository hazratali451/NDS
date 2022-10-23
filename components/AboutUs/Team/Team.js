import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import S from "./Team.module.css"
import underTitle from "/public/img/under-title.svg"
import underTitleMobile from "/public/img/under-title-mobile.svg"
import member1 from "/public/img/About-us/team/member1.png"
import member2 from "/public/img/About-us/team/member2.png"
import member3 from "/public/img/About-us/team/member3.png"
import member4 from "/public/img/About-us/team/member4.png"
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { useRouter } from 'next/router'





const Team = () => {
    const [deviceWidth, setDeviceWidth] = useState()
    const [profile1, setProfile1] = useState(false)
    const [profile2, setProfile2] = useState(false)
    const [profile3, setProfile3] = useState(false)
    const [profile4, setProfile4] = useState(false)


    useEffect(() => {
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        setDeviceWidth(width)
    }, [])


    return (
        <div id={S.team}>
            <div className={`container ${S.container} `}>
                <div className={`d-flex flex-column justify-content-center text-center ${S.jhsg}`}>
                    <h2 className={`title ${S.title}`}>Meet Our Team</h2>
                    <div><Image className={S.under_title} src={deviceWidth && deviceWidth < "767" ? underTitleMobile : underTitle} alt="" /></div>
                </div>



                <div className={`${S.wrapper}`}>

                    <div className={`  ${S.singleItem}`}>
                        <div className="d-sm-flex">

                            <div className={S.member_image}>
                                <Image src={member1} alt={"Jane Cooper"} />
                            </div>

                            <div className={S.main_content}>
                                <h5 className={S.member_name}>Jane Cooper</h5>

                                <span className={S.memner_degination}>Veterinarian.</span>

                                {
                                    profile1 ? <p className={S.member_deatils}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> : <button
                                        onClick={() => setProfile1(true)} className={S.leanr_more}>Leanr More <HiOutlineArrowNarrowRight /> </button>
                                }

                            </div>
                        </div>
                    </div>

                    <div className={`  ${S.singleItem}`}>
                        <div className="d-sm-flex">
                            <div className={S.member_image}>
                                <Image src={member2} alt={"Jane Cooper"} />
                            </div>
                            <div className={S.main_content}>
                                <h5 className={S.member_name}>Olive Yew</h5>
                                <span className={S.memner_degination}>Veterinarian.</span>

                                {
                                    profile2 ? <p className={S.member_deatils}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> : <button
                                        onClick={() => setProfile2(true)} className={S.leanr_more}>Leanr More <HiOutlineArrowNarrowRight /> </button>
                                }

                            </div>
                        </div>
                    </div>

                    <div className={`  ${S.singleItem}`}>
                        <div className="d-sm-flex">
                            <div className={S.member_image}>
                                <Image src={member3} alt={"Jane Cooper"} />
                            </div>
                            <div className={S.main_content}>
                                <h5 className={S.member_name}>Guy Hawkins</h5>
                                <span className={S.memner_degination}>Veterinarian.</span>

                                {
                                    profile3 ? <p className={S.member_deatils}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> : <button
                                        onClick={() => setProfile3(true)} className={S.leanr_more}>Leanr More <HiOutlineArrowNarrowRight /> </button>
                                }

                            </div>
                        </div>
                    </div>

                    <div className={`  ${S.singleItem}`}>
                        <div className="d-sm-flex">
                            <div className={S.member_image}>
                                <Image src={member4} alt={"Jane Cooper"} />
                            </div>
                            <div className={S.main_content}>
                                <h5 className={S.member_name}>Jenny Wilson</h5>
                                <span className={S.memner_degination}>Veterinarian.</span>

                                {
                                    profile4 ? <p className={S.member_deatils}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> : <button
                                        onClick={() => setProfile4(true)} className={S.leanr_more}>Leanr More <HiOutlineArrowNarrowRight /> </button>
                                }

                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Team;