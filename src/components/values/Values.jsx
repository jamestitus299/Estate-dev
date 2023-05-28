import React, { useState } from "react";
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
	AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Values.css";
import data from "../../utils/accordion";

const Values = () => {
	return (
		<section className="v-wrapper">
			<div className="paddings innerWidth flexCenter v-container">
				<div className="v-left">
					<div className="image-container">
						<img src="./value.png" alt="Image" />
					</div>
				</div>

				<div className="flexColStart v-right">

					<span className="orangeText ">Our Values</span>
					<span className="primaryText">Value we follow</span>
					<span className="secondaryText">
						Our belief make us strong. We provide the best price on
						the Market.We provide the best interest rates on the
						Maraket.
					</span>

					<Accordion
						className="accordion"
						allowMultipleExpanded={false}
						preExpanded={[0]}
					>
						{data.map((item, i) => {
							const [className, setClassName] = useState(null);
							return (
								<AccordionItem
									className={`accordionItem $(className)`}
									key={i}
									uuid={i}
								>
									<AccordionItemHeading className="flex accordion-heading">
										<AccordionItemButton className="flexCenter accordionButton">
											<AccordionItemState>
												{({ expanded }) =>
													expanded
														? setClassName(
																"expanded"
														  )
														: setClassName(
																"collapsed"
														  )
												}
											</AccordionItemState>
											<div className="flexCenter icon">
												{item.icon}
											</div>
											<span className="primaryText">
												{item.heading}
											</span>
											<div className="flexCenter icon">
												<MdOutlineArrowDropDown
													size={20}
												/>
											</div>
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p className="secondartText">
											{item.detail}
										</p>
									</AccordionItemPanel>
								</AccordionItem>
							);
						})}
					</Accordion>
				</div>
			</div>
		</section>
	);
};

export default Values;
