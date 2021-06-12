import "./showcase.styles.scss";

const Showcase = () => {
	return (
		<section className="container showcase">
			<picture>
				<source
					srcSet={
						require("../../assets/shared/desktop/image-best-gear.jpg").default
					}
					media="(min-width:1024px)"
				/>
				<source
					srcSet={
						require("../../assets/shared/tablet/image-best-gear.jpg").default
					}
					media="(min-width: 768px)"
				/>
				{/* Default Image */}
				<img
					src={
						require("../../assets/shared/mobile/image-best-gear.jpg").default
					}
					alt=""
				/>
			</picture>

			<div className="content">
				<h2 className="title">
					BRINGING YOU THE <span>BEST</span> AUDIO GEAR
				</h2>
				<p className="tagline">
					Located at the heart of New York City, Audiophile is the premier store
					for high end headphones, earphones, speakers, and audio accessories.
					We have a large showroom and luxury demonstration rooms available for
					you to browse and experience a wide range of our products. Stop by our
					store to meet some of the fantastic people who make Audiophile the
					best place to buy your portable audio equipment.
				</p>
			</div>
		</section>
	);
};

export default Showcase;
