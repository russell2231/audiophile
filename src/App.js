import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import ProductsContext from "./context/products/products.context";

import Navbar from "./components/navbar/navbar.component";
import HomePage from "./pages/homepage/homepage.component";
import CategoryPage from "./pages/categorypage/categorypage.component";
import Footer from "./components/footer/footer.component";

import PRODUCTS_DATA from "./context/products/products-data";

import "./App.scss";

function App() {
	const [products] = useState(PRODUCTS_DATA);

	return (
		<ProductsContext.Provider value={products}>
			<Navbar />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/headphones" component={CategoryPage} />
				<Route path="/speakers" component={CategoryPage} />
				<Route path="/earphones" component={CategoryPage} />
			</Switch>
			<Footer />
		</ProductsContext.Provider>
	);
}

export default App;
