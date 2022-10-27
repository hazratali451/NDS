/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Styles from "./MeetFriends.module.css";
import author from "/public/img/author.svg";
import GellaryImage1 from "/public/img/Home/Gellary/Img 3.jpg";
import GellaryImage2 from "/public/img/Home/Gellary/Img-2.png";
import GellaryImage3 from "/public/img/Home/Gellary/Img-3.png";
import GellaryImage4 from "/public/img/Home/Gellary/Img-4.png";
import GellaryImage5 from "/public/img/Home/Gellary/Img-5.png";
import GellaryImage6 from "/public/img/Home/Gellary/Img-6.png";
import shapes from "/public/img/shapes.svg";
import underTitleMobile from "/public/img/under-title-mobile.svg";
import underTitle from "/public/img/under-title.svg";

const MeetFriends = () => {
	const data = [
		{
			img: GellaryImage1,
		},
		{
			img: GellaryImage2,
		},
		{
			img: GellaryImage3,
		},
		{
			img: GellaryImage4,
		},
		{
			img: GellaryImage5,
		},
		{
			img: GellaryImage6,
		},
	];

	const [currentImage, setCurrentImage] = useState(0);
	const [viewerIsOpen, setViewerIsOpen] = useState(false);

	const openLightbox = useCallback((event, { photo, index }) => {
		setCurrentImage(index);
		setViewerIsOpen(true);
	}, []);

	const closeLightbox = () => {
		setCurrentImage(0);
		setViewerIsOpen(false);
	};

	const [deviceWidth, setDeviceWidth] = useState();

	useEffect(() => {
		var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
		setDeviceWidth(width);
	}, []);
	return (
		<section id={Styles.mission}>
			<div className={`${Styles.container} container-fluid`}>
				<div
					className={`${Styles.title} d-flex justify-content-center flex-column`}
				>
					<h2 className="title text-center">Meet Our Friends</h2>
					<Image
						src={
							deviceWidth && deviceWidth < "767"
								? underTitleMobile
								: underTitle
						}
						alt=""
					/>
				</div>
				<div className="d-flex justify-content-center">
					<p className={Styles.content}>
						Each visit to our office is unique and we love taking pictures
						with our furry friends. Feel free to stop by our office and
						say hello! We would love to build some memories with you too.
					</p>
				</div>

				<div id={Styles.ajksfhdasf}>
					<ResponsiveMasonry
						columnsCountBreakPoints={{ 350: 1, 768: 2, 1200: 3 }}
					>
						<Masonry gutter="24px">
							{data.map(({ img }, i) => (
								<div
									className={`position-relative ${Styles.item}`}
									key={i}
								>
									<Image
										style={{ width: `100%`, objectFit: `cover` }}
										src={img}
										alt=""
									/>
									<div className={Styles.hoverContent}>
										<div>
											<h4 className={Styles.title}>
												Enjoying With My Pet
											</h4>
											<img src={shapes.src} alt="" />
											<p className={Styles.txt}>
												Lorem Ipsum is simply dummy text of the
												printing and typesetting industry.Lorem
												Ipsum has been the industry's standard dummy
												text ever since the 1500s.
											</p>
											<div className={Styles.author}>
												<img
													className={Styles.authorImage}
													src={author.src}
													alt=""
												/>
												<div className="info">
													<h6>Jane Cooper</h6>
													<span>Business Man</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</Masonry>
					</ResponsiveMasonry>
				</div>
			</div>
		</section>
	);
};

export default MeetFriends;
