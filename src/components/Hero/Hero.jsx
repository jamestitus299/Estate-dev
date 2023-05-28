import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<section className="hero-wrapper">
			<div className="padding innerWidth flexCenter hero-container">
				{/* left Side */}
				<div className="flexColStart hero-left">
					<div className="hero-title">
						<div className="circle" />
						<motion.h1
							initial={{ y: "2rem", opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{
								duration: 2,
								type: "spring",
							}}
						>
							Discover <br />
							Luxury
						</motion.h1>
					</div>

					<div className="flexColStart hero-description">
						<span className="secondaryText">
							Find the Best property that suits you.
						</span>
						<span className="secondaryText">
							At the Best Price out there.
						</span>
					</div>

					<div className="flexCenter search-bar">
						<HiLocationMarker color="var(--blue)" size={25} />
						<input type="text" name="" id="" />	
						<button className="button">Search</button>
					</div>

					<div className="flexCenter stats">
						<div className="flexColCenter stat">
							<span>
								<CountUp start={3520} end={3600} duration={4} />
								<span>+</span>
							</span>
							<span className="secondaryText">
								Premium Property{" "}
							</span>
						</div>

						<div className="flexColCenter stat">
							<span>
								<CountUp start={6520} end={6600} duration={4} />
								<span>+</span>
							</span>
							<span className="secondaryText">
								Happy Customers{" "}
							</span>
						</div>

						<div className="flexColCenter stat">
							<span>
								<CountUp end={26} duration={4} />
								<span>+</span>
							</span>
							<span className="secondaryText">Awards won </span>
						</div>
					</div>
				</div>

				{/* right side */}
				<div className="flexCenter hero-right">
					<motion.div
						initial={{ x: "7rem", opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{
							duration: 2,
							type: "spring",
						}}
						className="image-container"
					>
						<img src="./r2.png" alt="image" />
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
