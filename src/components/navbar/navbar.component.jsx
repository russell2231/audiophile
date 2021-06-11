import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";
import { ReactComponent as HamburgerIcon } from "../../assets/shared/tablet/icon-hamburger.svg";
import { ReactComponent as CartIcon } from "../../assets/shared/desktop/icon-cart.svg";

import "./navbar.styles.scss";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="container">
				<HamburgerIcon className="nav-toggler" />
				<Link className="logo" to="/">
					<Logo />
				</Link>

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

				<CartIcon />
			</div>
		</nav>
	);
};

export default Navbar;
