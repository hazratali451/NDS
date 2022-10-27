import Image from "next/image";
import React from "react";
import Styles from "./Banner.module.css";
import BanenrDevider from "/public/img/banner-devider.png";
import BoneIcon from "/public/img/Home/bone-icon.svg";

const Banner = ({ setModalShow }) => {
	return (
		<section className={Styles.section}>
			<div className={`container text-center ${Styles.container}`}>
				<h3>Welcome to NDS Animal Hospital</h3>
				<div className="mt-3 mt-sm-0">
					<Image src={BanenrDevider} alt="banner devider"></Image>
				</div>
				<h1>
					Compassionate, Individualized <br />{" "}
					<span>Urgent and Wellness Care </span>{" "}
					<br className="d-md-none" /> for Your Pet.
				</h1>
				<div className="d-flex justify-content-center">
					<button
						onClick={() => setModalShow(true)}
						className={`cmn-btn d-flex justify-content-center align-items-center ${Styles.button}`}
					>
						<Image src={BoneIcon} alt="Bone Icon" />{" "}
						<span className="ms-1">Book A Visit Today</span>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Banner;
