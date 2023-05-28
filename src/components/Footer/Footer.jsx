import React from "react";
import './Footer.css'

const Footer = () => {
	return (
		<section className="f-wrapper">
			<div className="paddings innerWidth flexCenter f-container">
				<div className="flexColStart f-left">
					<img src="./logo2.png" alt="logo" width={120}></img>
					<span className="secondaryText">Buy the best property that suits you.</span>
				</div>

				<div className="flexColStart f-right">
					<span className="primaryText">Information</span>
					<span className="secondaryText">123, Bakers Street, South Hampton, Lindon</span>

					<div className="flexCenter f-menu secondaryText">
						<span>Properties</span>
						<span>Services</span>
						<span>Products</span>
						<span>About Us</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
