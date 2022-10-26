import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import S from "./Header.module.css";
import CatDog from "/public/img/Services/cat_dog.png";
import underTitleMobile from "/public/img/under-title-mobile.svg";
import underTitle from "/public/img/under-title.svg";

const Header = () => {
	const [deviceWidth, setDeviceWidth] = useState();

	useEffect(() => {
		var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
		setDeviceWidth(width);
	}, []);

	return (
		<section>
			<div className={S.brcm}>
				<div className="container text-center">
					<h3 className={S.brc_title}>Services</h3>
					<ul className="d-flex m-0 p-0 justify-content-center align-items-center">
						<li>
							<Link href={"/"}>Home</Link>{" "}
						</li>
						<span>/</span>
						<li>Services</li>
					</ul>
				</div>
			</div>

			<div id={S.Header}>
				<div className={`container ${S.container}`}>
					<div
						className={`row align-items-center justify-content-center ${S.row}`}
					>
						<div className="col">
							<div
								className={`d-flex flex-column justify-content-center ${S.underTitle}`}
							>
								<h2 className={`title ${S.title}`}>
									An Animal Hospital for Your Furry Friend Needs
								</h2>
								<div>
									<Image
										className={S.under_title}
										src={
											deviceWidth && deviceWidth < "767"
												? underTitleMobile
												: underTitle
										}
										alt=""
									/>
								</div>
							</div>
							<p>
								Our fully equipped veterinary clinic is staffed with
								highly skilled, compassionate, and caring animal care
								professionals. From simple wellness exams to complex
								surgeries, we are here to serve all your pet&apos;s
								needs.
							</p>
						</div>
						<div className="col col-10 col-sm-7">
							<Image src={CatDog} alt="Cat and dog" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Header;
