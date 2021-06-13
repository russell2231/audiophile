import { Link, useRouteMatch } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";

import "./product-list.styles.scss";

const ProductList = ({ category }) => {
	const { url } = useRouteMatch();

	return (
		<section className="container product-list">
			{category &&
				category.map((product) => {
					return (
						<div className="product-container" key={product.id}>
							<div className="image-container">
								<picture className="image">
									<source
										srcSet={product.image.desktop}
										media="(min-width:1024px)"
									/>
									<source
										srcSet={product.image.tablet}
										media="(min-width:768px)"
									/>
									<img src={product.image.mobile} alt="" />
								</picture>
							</div>

							<div className="content">
								{product.new ? (
									<span className="new-product">New Product</span>
								) : (
									""
								)}
								<h2 className="title">{product.name}</h2>
								<p className="tagline">{product.description}</p>
								<Link to={`${url}/${product.slug}`}>
									<CustomButton>See Product</CustomButton>
								</Link>
							</div>
						</div>
					);
				})}
		</section>
	);
};

export default ProductList;
