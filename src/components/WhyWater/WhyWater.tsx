import "./WhyWater.scss";

const WhyWater = () => {
	return (
		<section className="why-water">
			<h2 className="why-water__title">Why Does AI Use Water?</h2>
			<div className="why-water__text">
				<p>
					AI models like ChatGPT run on powerful servers that process enormous
					amounts of data. These servers generate heat, and to prevent
					overheating, they must be cooled down—often with the help of water.
				</p>
				<p>
					Many data centers rely on water-based cooling systems, either directly
					or indirectly, to keep things running safely and efficiently.
				</p>
			</div>

			<div className="why-water__visual">
				<div className="why-water__server">
					<div className="why-water__heat">
						<span className="why-water__heat-label">HEAT</span>
						<div className="why-water__steam"></div>
					</div>
					<span className="why-water__server-label">Server Rack</span>
				</div>

				<div className="why-water__droplet why-water__droplet--left">💧</div>
				<div className="why-water__droplet why-water__droplet--right">💧</div>
			</div>
		</section>
	);
};

export default WhyWater;
