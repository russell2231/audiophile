import CustomButton from "../../components/custom-button/custom-button.component";
import NavbarSecondary from "../../components/navbar-secondary/navbar-secondary.component";
import Showcase from "../../components/showcase/showcase.component";

import "./homepage.styles.scss";

const HomePage = () => {
	return (
		<main className="homepage">
			<section className="hero">
				<div className="container">
					<article className="content">
						<span className="new-product">NEW PRODUCT</span>
						<h1 className="title">XX99 MARK II HEADPHONE</h1>
						<p className="tagline">
							Experience natural, lifelike audio and exceptional build quality
							made for the passionate music enthusiast.
						</p>
						<CustomButton>SEE PRODUCT</CustomButton>
					</article>
				</div>
			</section>

			<NavbarSecondary />

			<section className="container featured-items">
				<div className="main-featured-item">
					<picture>
						<source
							srcSet={
								require("../../assets/home/desktop/image-speaker-zx9.png")
									.default
							}
							media="(min-width:1024px)"
						/>
						<source
							srcSet={
								require("../../assets/home/tablet/image-speaker-zx9.png")
									.default
							}
							media="(min-width: 768px)"
						/>
						{/* Default Image */}
						<img
							src={
								require("../../assets/home/mobile/image-speaker-zx9.png")
									.default
							}
							alt="zx9 speaker"
						/>
					</picture>
					<div className="content">
						<h2 className="title">ZX9 SPEAKER</h2>
						<p className="tagline">
							Upgrade to premium speakers that are phenomenally built to deliver
							truly remarkable sound.
						</p>
						<CustomButton secondary invert>
							See Product
						</CustomButton>
					</div>
				</div>

				<div className="secondary-featured-item">
					<h2 className="title">ZX7 SPEAKER</h2>
					<CustomButton secondary>See Product</CustomButton>
				</div>

				<div className="tertiary-featured-item">
					<picture className="image-container">
						<source
							srcSet={
								require("../../assets/home/desktop/image-earphones-yx1.jpg")
									.default
							}
							media="(min-width:1024px)"
						/>
						<source
							srcSet={
								require("../../assets/home/tablet/image-earphones-yx1.jpg")
									.default
							}
							media="(min-width: 768px)"
						/>
						{/* Default Image */}
						<img
							src={
								require("../../assets/home/mobile/image-earphones-yx1.jpg")
									.default
							}
							alt="yx1 earphones"
						/>
					</picture>

					<div className="content">
						<h2 className="title">YX1 EARPHONES</h2>
						<CustomButton secondary>See Product</CustomButton>
					</div>
				</div>
			</section>

			<Showcase />
		</main>
	);
};

export default HomePage;
