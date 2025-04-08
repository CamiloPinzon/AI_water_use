import { RefreshCw } from "lucide-react";
import "./WaterReuse.scss";

export default function WaterReuse() {
	return (
		<section className="water-reuse">
			<h2 className="water-reuse__title">
				Is the Water Reusable? What Happens After It's Used?
			</h2>

			<p className="water-reuse__intro">
				That depends on the cooling system used:
			</p>

			<div className="water-reuse__grid">
				<div className="water-reuse__card water-reuse__card--blue">
					<h3 className="water-reuse__card-title water-reuse__card-title--blue">
						Evaporative Cooling (Cooling Towers)
					</h3>
					<ul className="water-reuse__list">
						<li>Water evaporates to dissipate server heat.</li>
						<li>
							This water <strong>can't be recovered</strong> — it turns into
							vapor.
						</li>
						<li>
							<strong>Efficient</strong>, but consumes lots of water.
						</li>
					</ul>
					<div className="water-reuse__icon water-reuse__icon--blue">
						<svg width="100" height="100" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M12,20C8.69,20 6,17.31 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14C18,17.31 15.31,20 12,20Z"
							/>
						</svg>
					</div>
				</div>

				<div className="water-reuse__card water-reuse__card--green">
					<h3 className="water-reuse__card-title water-reuse__card-title--green">
						Closed-loop Chiller Systems
					</h3>
					<ul className="water-reuse__list">
						<li>Water circulates without evaporating.</li>
						<li>
							It <strong>can be reused continuously</strong>, requiring only
							minimal top-ups.
						</li>
						<li>
							Less water waste, but <strong>more energy use</strong> due to
							compressors and chillers.
						</li>
					</ul>
					<div className="water-reuse__icon water-reuse__icon--green">
						<RefreshCw size={80} />
					</div>
				</div>
			</div>

			<div className="water-reuse__extra">
				<p>Some modern data centers are even using:</p>
				<ul>
					<li>
						<strong>Recycled (gray) water</strong>
					</li>
					<li>
						<strong>Rainwater harvesting</strong>
					</li>
					<li>
						<strong>Non-water-based cooling</strong>, such as direct liquid
						cooling systems
					</li>
				</ul>
			</div>
		</section>
	);
}
