import { Link } from "react-router-dom";

import headphonesIcon from "../../assets/shared/desktop/image-headphones.png";
import speakersIcon from "../../assets/shared/desktop/image-speakers.png";
import earphonesIcon from "../../assets/shared/desktop/image-earphones.png";
import { ReactComponent as RightArrow } from "../../assets/shared/desktop/icon-arrow-right.svg";

import "./navbar-secondary.styles.scss";

const NavbarSecondary = () => {
	return (
		<section className="container navbar-secondary">
			<div className="category">
				<img src={headphonesIcon} alt="headphones" />
				<span className="title">HEADPHONES</span>
				<Link className="category-link" to="/headphones">
					SHOP <RightArrow />
				</Link>
			</div>

			<div className="category">
				<img src={speakersIcon} alt="speakers" />
				<span className="title">SPEAKERS</span>
				<Link className="category-link" to="/speakers">
					SHOP <RightArrow />
				</Link>
			</div>

			<div className="category">
				<img src={earphonesIcon} alt="earphones" />
				<span className="title">EARPHONES</span>
				<Link className="category-link" to="/earphones">
					SHOP <RightArrow />
				</Link>
			</div>
		</section>
	);
};

export default NavbarSecondary;
