import { RefreshCw, Factory } from "lucide-react";
import "./Worry.scss";

export default function WaterAfterUse() {
	return (
		<section className="water-after">
			<h2 className="water-after__title">What Happens After Water Is Used?</h2>

			<ol className="water-after__list">
				<li>
					In <strong>closed-loop systems</strong>, water is cooled and reused.
				</li>
				<li>
					In <strong>evaporative systems</strong>, some water is lost and the
					remaining must be treated or disposed of as wastewater.
				</li>
				<li>
					Some facilities discharge <strong>warmer water</strong> into rivers or
					local networks, which can pose <strong>ecological risks</strong> if
					not regulated.
				</li>
			</ol>

			<div className="water-after__visual">
				<div className="water-after__block water-after__block--left">
					<div className="water-after__icon-box">
						<RefreshCw size={40} className="water-after__icon" />
						<div className="water-after__label">Closed Loop</div>
						<div className="water-after__sub">Water Recycled</div>
					</div>
				</div>
				<div className="water-after__block water-after__block--right">
					<div className="water-after__icon-box">
						<Factory size={40} className="water-after__icon" />
						<div className="water-after__label">Treatment</div>
						<div className="water-after__sub">Water Processed</div>
					</div>
				</div>
				<div className="water-after__progress">
					<div className="water-after__progress-fill"></div>
				</div>
			</div>
		</section>
	);
}
