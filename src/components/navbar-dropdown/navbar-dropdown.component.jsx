import { useContext } from "react";

import NavbarContext from "../../context/navbar/navbar.context";

import NavbarSecondary from "../navbar-secondary/navbar-secondary.component";

import "./navbar-dropdown.styles.scss";

const NavbarDropdown = () => {
	const { toggleHidden } = useContext(NavbarContext);

	return (
		<>
			<div className="overlay" onClick={toggleHidden}></div>
			<div className="navbar-dropdown">
				<NavbarSecondary />
			</div>
		</>
	);
};

export default NavbarDropdown;
