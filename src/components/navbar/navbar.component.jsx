import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import NavbarContext from "../../context/navbar/navbar.context";

import NavbarDropdown from "../navbar-dropdown/navbar-dropdown.component";

import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";
import { ReactComponent as HamburgerIcon } from "../../assets/shared/tablet/icon-hamburger.svg";
import { ReactComponent as CartIcon } from "../../assets/shared/desktop/icon-cart.svg";

import "./navbar.styles.scss";

const Navbar = () => {
	const [hidden, setHidden] = useState(true);
	const toggleHidden = () => setHidden(!hidden);
	const location = useLocation();

	useEffect(() => {
		setHidden(true);
	}, [location]);

	return (
		<nav className="navbar">
			<div className="container nav-container">
				<HamburgerIcon
					className={`${!hidden ? "open" : ""} nav-toggler`}
					onClick={toggleHidden}
				/>

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

			{hidden ? (
				""
			) : (
				<NavbarContext.Provider
					value={{
						hidden,
						toggleHidden,
					}}
				>
					<NavbarDropdown />
				</NavbarContext.Provider>
			)}
		</nav>
	);
};

export default Navbar;
