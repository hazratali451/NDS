import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import S from "./EasyToFind.module.css";
import dog from "/public/img/dog.svg";
import underTitleMobile from "/public/img/under-title-mobile.svg";
import underTitle from "/public/img/under-title.svg";

const EasyToFind = () => {
	const [deviceWidth, setDeviceWidth] = useState();

	useEffect(() => {
		var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
		setDeviceWidth(width);
	}, []);
	return (
		<div id={S.easyToFind}>
			<div className="container-fluid p-0 overflow-hidden">
				<div
					className={`${S.title} d-flex justify-content-center flex-column`}
				>
					<h2 className="title text-center">We Are Easy to Find</h2>
					<Image
						src={
							deviceWidth && deviceWidth < "767"
								? underTitleMobile
								: underTitle
						}
						alt=""
					/>
					<p className="text-center">
						Our clinic is conveniently located near you
					</p>
				</div>
				<div className={S.wrapper}>
					<div className={S.sideImage}>
						<div className="mx-auto">
							<Image src={dog} alt="" />
						</div>
						<div className={S.info}>
							<h6>Come Visit Us Today, We are Here to Serve You</h6>
							<Link href="/">Schedule a Visit</Link>
						</div>
					</div>
					<div className={S.pointer}>
						{/* <Image src={Map} alt="" /> */}
						<div className={S.gmap_iframe}>
							<div className={S.gmap_canvas}>
								<iframe
									frameborder="0"
									scrolling="no"
									marginheight="0"
									marginwidth="0"
									src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EasyToFind;
