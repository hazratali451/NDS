import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import S from "./Article.module.css";
import pic2 from "/public/img/Resources/blog/Img-1.png";
import pic3 from "/public/img/Resources/blog/Img-2.png";
import pic4 from "/public/img/Resources/blog/Img-3.png";
import pic5 from "/public/img/Resources/blog/Img-4.png";
import pic6 from "/public/img/Resources/blog/Img-5.png";
import pic1 from "/public/img/Resources/blog/Img.png";
import underTitleMobile from "/public/img/under-title-mobile.svg";
import underTitle from "/public/img/under-title.svg";

const Article = () => {
	const router = useRouter();

	const [deviceWidth, setDeviceWidth] = useState();

	useEffect(() => {
		var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
		setDeviceWidth(width);
	}, []);

	const data = [
		{
			title: "Tips and tricks: Puppy’s First Grooming",
			shortDescription: "Lorem Ipsum is simply dummy text of the printing. ",
			date: "February 18, 2022",
			image: pic1,
		},
		{
			title: "Cat Health – Keeping Them Purr-fect",
			shortDescription: "Lorem Ipsum is simply dummy text of the printing. ",
			date: "February 20, 2022",
			image: pic2,
		},
		{
			title: "14 Foods You Can Share with Your Dog",
			shortDescription: "Lorem Ipsum is simply dummy text of the printing. ",
			date: "March 08, 2022",
			image: pic3,
		},
		{
			title: "Pet treats: our picks &favorite recipes",
			shortDescription: "Lorem Ipsum is simply dummy text of the printing. ",
			date: "May 10, 2022",
			image: pic4,
		},
		{
			title: "Dog walking is possible when it's cold",
			shortDescription: "Lorem Ipsum is simply dummy text of the printing. ",
			date: "May 20, 2022",
			image: pic5,
		},
		{
			title: "These toys can be bad for your pet",
			shortDescription: "Lorem Ipsum is simply dummy text of the printing. ",
			date: "April 10, 2022",
			image: pic6,
		},
	];

	return (
		<section id={S.article}>
			<div className={`container ${S.container}`}>
				<div
					className={`d-flex flex-column justify-content-center text-center`}
				>
					<div>
						<h2 className={`title ${S.title}`}>Recent Article</h2>
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
					<div
						className={`row g--4 row-cols-1 row-cols-md-2 row-cols-lg-3 gx-4 ${S.row}`}
					>
						{data.map((item, index) => (
							<div key={index} className="col">
								<div
									className={`${S.single_wrapper} card h-100 border-0`}
								>
									<div className={S.card_wrapper}>
										<Image src={item.image} alt={item.title} />
									</div>
									<div className="card-body p-0 m-0 ">
										<div className={S.contents}>
											<span className={S.date}>{item.date}</span>
											<h5 className={S.single_titme}>
												{item.title}
											</h5>
											<p className={S.short_description}>
												{item.shortDescription}
											</p>
										</div>
									</div>
									<div
										className={`card-footer m-0 border-0 text-start bg-transparent ${S.card_footer}`}
									>
										<button
											className={S.read_more}
											onClick={() => router.push("/resources")}
										>
											Read More{" "}
											<svg
												width="15"
												height="6"
												viewBox="0 0 15 6"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M14.018 4.8576L10.8985 0.269362C10.8416 0.185602 10.7691 0.117874 10.6864 0.0712642C10.6037 0.0246544 10.513 0.000373529 10.421 0.000244141H9.18844C9.061 0.000244141 8.99062 0.170097 9.06861 0.287009L11.8134 4.32377H0.301586C0.217892 4.32377 0.149414 4.40319 0.149414 4.50024V5.82377C0.149414 5.92083 0.217892 6.00024 0.301586 6.00024H13.5387C14.0484 6.00024 14.3319 5.32083 14.018 4.8576Z"
													fill="#103559"
												/>
											</svg>
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Article;
