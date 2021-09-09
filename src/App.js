import { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import ProductsContext from './context/products/products.context';
import CartContextProvider from './context/cart/cart.context';

import Navbar from './components/navbar/navbar.component';
import HomePage from './pages/homepage/homepage.component';
import CategoryPage from './pages/categorypage/categorypage.component';
import ProductPage from './pages/productpage/productpage.component';
import CheckoutPage from './pages/checkoutpage/checkoutpage.component';
import StripeCheckoutPage from './pages/stripe-checkout-page/StripeCheckoutPage';
import Footer from './components/footer/footer.component';

import PRODUCTS_DATA from './context/products/products-data';

import './App.scss';

function App() {
	const [products] = useState(PRODUCTS_DATA);
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<ProductsContext.Provider value={products}>
			<CartContextProvider>
				<Navbar />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/headphones' component={CategoryPage} />
					<Route exact path='/speakers' component={CategoryPage} />
					<Route exact path='/earphones' component={CategoryPage} />
					<Route exact path='/:category/:productSlug' component={ProductPage} />
					<Route exact path='/checkout' component={CheckoutPage} />
					<Route path='/pay' component={StripeCheckoutPage} />
				</Switch>
				<Footer />
			</CartContextProvider>
		</ProductsContext.Provider>
	);
}

export default App;
