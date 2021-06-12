import CustomButton from "../../components/custom-button/custom-button.component";
import NavbarSecondary from "../../components/navbar-secondary/navbar-secondary.component";
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
		</main>
	);
};

export default HomePage;
