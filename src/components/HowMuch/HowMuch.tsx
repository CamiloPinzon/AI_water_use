import { useState, useRef, useEffect } from "react";
import "./HowMuch.scss";

export default function HowMuch() {
	const [animatedNumber, setAnimatedNumber] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);
	const animationRef = useRef<number | null>(null);

	const startCountUp = () => {
		if (isAnimating) return;

		setIsAnimating(true);
		const duration = 1500;
		const start = performance.now();

		const animate = (time: number) => {
			const elapsed = time - start;
			const progress = Math.min(elapsed / duration, 1);
			const current = Math.floor(progress * 700000);
			setAnimatedNumber(current);

			if (progress < 1) {
				animationRef.current = requestAnimationFrame(animate);
			} else {
				setIsAnimating(false);
			}
		};

		if (animationRef.current) cancelAnimationFrame(animationRef.current);
		animationRef.current = requestAnimationFrame(animate);
	};
	
	useEffect(() => {
		startCountUp();
		
		return () => {
			if (animationRef.current) cancelAnimationFrame(animationRef.current);
		};
	}, []);

	return (
		<div className="how-much">
			<h2 className="how-much__title">
				How Much Water Does ChatGPT or Generative AI Use?
			</h2>

			<p>
				Training GPT-3 required around{" "}
				<span className="how-much__number">
					{animatedNumber.toLocaleString()}
				</span>{" "}
				liters of water.
			</p>

			<button onClick={startCountUp} className="how-much__button">
				Animate Number
			</button>
		</div>
	);
}
