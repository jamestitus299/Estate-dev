import React from "react";
import './GetStarted.css'

const GetStarted = () => {
	return (
		<section className="g-wrapper">
			<div className="paddings innerWidth g-container">
				<div className="flexColCenter inner-container">
					<span className="primaryText">Get Started with Us</span>
					<span className="secondaryText">
                        Get in touch with us to get real good information on properties
                    </span>
                    <button className="button">
                        <a href="#">Get in touch</a>
                    </button>
				</div>
			</div>
		</section>
	);
};

export default GetStarted;  
