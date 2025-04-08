import { Droplet } from "lucide-react";

import "./Intro.scss";

export default function Intro() {
	return (
		<section className="intro">
			<h1 className="intro__title">How Much Water Does AI Really Use?</h1>
			<h2 className="intro__subtitle">
				Myths, Realities, and Surprising Comparisons
			</h2>
			<div className="intro__text">
				<p>
					Artificial intelligence has revolutionized the way we interact with
					technology. From generating Ghibli-style images to holding deep
					conversations, tools like ChatGPT are becoming part of our daily
					lives. But with this growth, legitimate concerns have emerged about
					AI's environmental impact.
				</p>
				<p>
					One of the most talked about lately:{" "}
					<strong>its water consumption</strong>.
				</p>
			</div>
			<div className="intro__icon">
				<Droplet size={80} className="intro__droplet" />
			</div>
		</section>
	);
}
