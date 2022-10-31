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
			{/* Dog */}
			<div className="text-end">
				<svg
					className={S.dog_1}
					width="299"
					height="231"
					viewBox="0 0 299 231"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g opacity="0.3">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M184.495 219.641L0 231H369L184.495 219.641Z"
							fill="#0062AF"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M257.168 160.545C262.841 161.339 268.319 163.168 273.333 165.941C272.713 164.374 272.083 162.786 271.464 161.25C281.085 168.812 287.03 178.078 288.553 189.394L290.191 177.426C292.922 192.034 290.948 204.16 280.591 211.901L283.963 211.543C267.871 234.218 223.494 234.786 208.064 207.284C210.48 213.174 211.562 221.777 207.297 224.9L138.667 227.614L112.902 226.909H81.0553C77.5156 226.909 76.1081 221.882 79.4062 218.706L93.7015 209.093C97.5143 193.18 97.4198 170.673 88.7124 157.474C101.894 167.823 102.188 195.662 99.7516 210.26C98.4176 215.14 93.649 219.189 88.7754 221.987C94.0299 219.965 98.642 216.56 102.125 212.132C105.045 184.072 102.125 162.27 85.0886 151.132C85.2042 152.763 85.3197 154.393 85.4457 156.023C80.5301 152.71 76.3182 145.369 74.7847 138.47C75.0367 141.194 75.2888 143.928 75.5514 146.652C70.7034 139.839 67.769 131.849 67.0541 123.514C66.6549 125.891 66.2628 128.268 65.8776 130.645C63.8347 123.087 63.0121 115.251 63.4408 107.433L61.8023 116.794C58.2206 102.08 64.7433 87.4717 72.0957 72.8423C80.6141 62.5144 84.7 52.6702 67.6527 45.1609C59.8591 43.7622 56.8446 40.0916 57.3068 34.0442H61.5082L57.8529 29.8373C56.624 26.0722 56.8026 18.9205 58.4411 18.4893L81.6855 23.7479C88.4781 19.3967 96.4054 17.157 104.468 17.3113L100.382 14.6189V11.1062L93.9536 8.06671C103.26 4.91154 108.827 7.9405 111.589 15.6707C116.806 12.6347 120.622 7.41113 123.038 0C128.164 8.56102 127.88 28.6489 127.912 48.0532C128.969 49.2076 130.298 50.0789 131.777 50.5878C130.345 50.7182 128.903 50.4981 127.575 49.9463C128.673 54.2481 130.714 58.2508 133.552 61.6625L129.046 60.5476C130.243 66.574 133.384 72.064 138.005 77.1543L133.321 74.6828C135.069 79.8057 138.288 84.2982 142.575 87.5979C189.189 116.447 206.447 148.966 213.064 182.81C219.103 201.542 260.571 209.314 261.611 184.346C259.314 180.37 257.018 176.395 254.721 172.419L262.304 175.101C261.328 170 259.555 165.084 257.053 160.535"
							fill="#0062AF"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M157.448 183.725C132.817 190.73 135.937 207.568 150.684 224.395C130.265 210.912 127.471 185.608 157.448 183.725ZM182.037 187.112C184.337 199.491 182.037 211.869 176.439 224.248C197.75 222.765 203.391 203.508 182.037 187.112ZM114.615 228.129C114.615 221.903 115.812 220.714 119.478 215.603C119.993 202.12 115.907 190.12 110.35 178.603C105.309 168.16 111.873 151.196 110.644 138.512C111.581 138.203 112.443 137.704 113.177 137.045C113.911 136.386 114.501 135.582 114.909 134.684C106.916 136.398 100.592 134.62 98.8699 123.188C98.2291 120.864 98.2712 119.276 100.634 118.319L106.369 116.699C106.884 114.028 108.145 110.284 111.621 108.685L115.518 108.096C115.254 105.265 115.528 102.41 116.327 99.6822C118.837 100.934 120.816 103.046 121.904 105.635H123.669C123.674 102.566 124.739 99.5933 126.683 97.2212C134.792 108.022 141.535 121.011 144.539 140.068L172.615 168.244C174.182 164.815 176.868 162.022 180.23 160.325C188.15 156.738 190.188 165.846 185.598 167.087C181.26 168.907 179.18 173.292 182.068 176.279C201.174 187.922 214.724 214.057 192.866 228.034L114.615 228.129Z"
							fill="white"
						/>
					</g>
				</svg>
			</div>
		</section>
	);
};

export default Article;
