import { createContext } from "react";

const NavbarContext = createContext({
	hidden: true,
	toggleHidden: () => {},
});

export default NavbarContext;
