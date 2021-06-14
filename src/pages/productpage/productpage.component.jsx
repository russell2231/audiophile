import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import ProductsContext from "../../context/products/products.context";

import ProductDetails from "../../components/product-details/product-details.component";
import NavbarSecondary from "../../components/navbar-secondary/navbar-secondary.component";
import Showcase from "../../components/showcase/showcase.component";

import "./productpage.styles.scss";

const ProductPage = () => {
	const { productSlug } = useParams();
	const products = useContext(ProductsContext);
	const [product, setProduct] = useState(null);

	useEffect(() => {
		const getProduct = () => {
			const product = products.find((product) => product.slug === productSlug);
			setProduct(product);
		};
		getProduct();
	}, [productSlug]);

	return (
		<main className="product-page">
			{product && <ProductDetails product={product} />}
			<NavbarSecondary />
			<Showcase />
		</main>
	);
};

export default ProductPage;
