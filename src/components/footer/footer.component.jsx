import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";
import { ReactComponent as FacebookIcon } from "../../assets/shared/desktop/icon-facebook.svg";
import { ReactComponent as TwitterIcon } from "../../assets/shared/desktop/icon-twitter.svg";
import { ReactComponent as InstagramIcon } from "../../assets/shared/desktop/icon-instagram.svg";

import "./footer.styles.scss";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container content">
				<Link className="logo" to="/">
					<Logo />
				</Link>

				<nav className="nav">
					<ul className="nav-list">
						<li className="nav-item">
							<Link to="/">HOME</Link>
						</li>
						<li className="nav-item">
							<Link to="/headphones">HEADPHONES</Link>
						</li>
						<li className="nav-item">
							<Link to="/speakers">SPEAKERS</Link>
						</li>
						<li className="nav-item">
							<Link to="/earphones">EARPHONES</Link>
						</li>
					</ul>
				</nav>

				<p className="tagline">
					Audiophile is an all in one stop to fulfill your audio needs. We're a
					small team of music lovers and sound specialists who are devoted to
					helping you get the most out of personal audio. Come and visit our
					demo facility - we’re open 7 days a week.
				</p>

				<p className="copyright">Copyright 2021. All Rights Reserved</p>

				<div className="socials">
					<FacebookIcon />
					<TwitterIcon />
					<InstagramIcon />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
