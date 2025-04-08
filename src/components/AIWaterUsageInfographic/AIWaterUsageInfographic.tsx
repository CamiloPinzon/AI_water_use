import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Intro from "../Intro/Intro";
import WhyWater from "../WhyWater/WhyWater";
import HowMuch from "../HowMuch/HowMuch";
import Comparison from "../Comparison/Comparison";
import WaterReuse from "../WaterReuse/WaterReuse";
import Worry from "../Worry/Worry";

import "./AIWaterUsageInfographic.scss";

const sections = [
	<Intro />,
	<WhyWater />,
	<HowMuch />,
	<Comparison />,
	<WaterReuse />,
	<Worry />,
];

export default function Infographic() {
	const [currentSection, setCurrentSection] = useState(0);

	const handleNext = () => {
		setCurrentSection((prev) => (prev + 1) % sections.length);
	};

	const handlePrev = () => {
		setCurrentSection((prev) => (prev - 1 + sections.length) % sections.length);
	};

	return (
		<div className="navigation">
			<AnimatePresence mode="wait">
				<motion.div
					key={currentSection}
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -30 }}
					transition={{ duration: 0.5 }}
					className="navigation__section"
				>
					{sections[currentSection]}
				</motion.div>
			</AnimatePresence>

			<div className="navigation__arrows">
				<button onClick={handlePrev} className="navigation__button">
					<ArrowLeft
						size={16}
						className="navigation__icon navigation__icon--left"
					/>
				</button>
				<button onClick={handleNext} className="navigation__button">
					<ArrowRight
						size={16}
						className="navigation__icon navigation__icon--right"
					/>
				</button>
			</div>

			<div className="navigation__dots">
				{sections.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentSection(index)}
						className={`navigation__dot ${
							currentSection === index ? "navigation__dot--active" : ""
						}`}
						aria-label={`Go to section ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
}
