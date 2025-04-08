import { useEffect, useState } from "react";
import "./Comparison.scss";

const waterComparisonData = [
	{ name: "ChatGPT (20 prompts)", value: 0.5, color: "#3B82F6" },
	{ name: "Cup of Coffee", value: 130, color: "#10B981" },
	{ name: "Cotton Shirt", value: 2700, color: "#F59E0B" },
	{ name: "Beef Burger", value: 2400, color: "#EF4444" },
];

export default function Comparison() {
	const [barWidths, setBarWidths] = useState<number[]>(
		new Array(waterComparisonData.length).fill(0)
	);

	useEffect(() => {
		const timeouts = waterComparisonData.map((item, index) =>
			setTimeout(() => {
				setBarWidths((prevWidths) => {
					const newWidths = [...prevWidths];
					newWidths[index] = (item.value / 2700) * 100; // Normalize to 100%
					return newWidths;
				});
			}, index * 200)
		);

		return () => {
			timeouts.forEach(clearTimeout);
		};
	}, []);

	return (
		<section className="comparison">
			<h2 className="comparison__title">
				How Does It Compare to Everyday Products?
			</h2>
			<p className="comparison__intro">Let's put that in perspective:</p>

			<div className="comparison__chart">
				{waterComparisonData.map((item, index) => (
					<div key={index} className="comparison__bar-container">
						<div className="comparison__bar-info">
							<span className="comparison__bar-value">{item.value} L</span>
						</div>
						<div
							className="comparison__bar"
							style={{
								backgroundColor: item.color,
								width: `${barWidths[index]}%`,
								transition: "width 1s ease-out",
							}}
						></div>
						<div className="comparison__label">{item.name}</div>
					</div>
				))}
			</div>

			<p className="comparison__note">
				So, while AI's impact <strong>isn't negligible</strong>, it's far
				smaller than what we consume through food or clothing. But the story
				changes when millions use AI daily.
			</p>
		</section>
	);
}
