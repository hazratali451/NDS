import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Styles from "./HoWeHelp.module.css";
import Icon6 from "/public/img/Home/icons/Icon10.svg";
import Icon1 from "/public/img/Home/icons/Icon5.svg";
import Icon2 from "/public/img/Home/icons/Icon6.svg";
import Icon3 from "/public/img/Home/icons/Icon7.svg";
import Icon4 from "/public/img/Home/icons/Icon8.svg";
import Icon5 from "/public/img/Home/icons/Icon9.svg";
import UnderTitleMobile from "/public/img/under-title-mobile.svg";
import UnderTitle from "/public/img/under-title.svg";

const HoWeHelp = () => {
	const [deviceWidth, setDeviceWidth] = useState();

	useEffect(() => {
		var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
		setDeviceWidth(width);
	}, []);

	const data = [
		{
			title: "Urgent Care",
			icon: Icon1,
		},
		{
			title: "Surgery",
			icon: Icon2,
		},
		{
			title: "Checkup",
			icon: Icon3,
		},
		{
			title: "Dental",
			icon: Icon4,
		},
		{
			title: "Spaying",
			icon: Icon5,
		},
		{
			title: "Neutering",
			icon: Icon6,
		},
	];

	const settings = {
		dots: false,
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: false,
		arrows: false,
		swipeToSlide: true,
		touchMove: true,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 777,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	};

	return (
		<section id={Styles.HowWeHelp}>
			<div className={`container-fluid ${Styles.container}`}>
				<div className="d-flex justify-content-center flex-column align-items-center">
					<h2 className="title text-center">How We Help</h2>
					<Image
						src={
							deviceWidth && deviceWidth < "767"
								? UnderTitleMobile
								: UnderTitle
						}
						alt=""
					/>
				</div>
				<div className="d-flex flex-wrap justify-content-center">
					<p className={Styles.content}>
						From simple wellness exams to complex surgeries, our
						veterinarians and staff are here to serve all your pet&#39;s
						needs. We provide a full spectrum of on-site services tailored
						to your pet care and we are confident we can help you.
					</p>
				</div>
				<div className={`${Styles.static} d-none d-lg-block`}>
					<div className="d-flex justify-content-center align-items-center">
						{data.map((item, index) => (
							<div className={Styles.boxWrapper} key={index}>
								<Image src={item.icon} alt={item.title} />
								<h3>{item.title}</h3>
							</div>
						))}
					</div>
				</div>

				<div className="d-lg-none">
					<Slider className="asvsd" {...settings}>
						{data &&
							data.map((item, index) => (
								<div key={index} className={Styles.boxWrapper}>
									<Image src={item.icon} alt={item.title} />
									<h3>{item.title}</h3>
								</div>
							))}
					</Slider>
				</div>

				<div className={`${Styles.button} text-center`}>
					<Link href="/services">
						<a className="cmn-btn">See All Services</a>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HoWeHelp;
