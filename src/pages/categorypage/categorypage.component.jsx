import { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import ProductsContext from '../../context/products/products.context';
import ProductList from '../../components/product-list/product-list.component';
import NavbarSecondary from '../../components/navbar-secondary/navbar-secondary.component';
import Showcase from '../../components/showcase/showcase.component';

import './categorypage.styles.scss';

const CategoryPage = () => {
	const products = useContext(ProductsContext);
	const location = useLocation();

	const [category, setCategory] = useState([]);

	useEffect(() => {
		const getCategory = () => {
			const category = products.filter(
				(product) => product.category === location.pathname.replace('/', '')
			);
			setCategory(category);
		};
		getCategory();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location]);

	return (
		<main className='category-page'>
			<section className='hero'>
				<h1 className='title'>{location.pathname.replace('/', '')}</h1>
			</section>

			<ProductList category={category} />
			<NavbarSecondary />
			<Showcase />
		</main>
	);
};

export default CategoryPage;
