import { useHistory, Link } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";

import "./product-details.styles.scss";

const ProductDetails = ({ product }) => {
	const history = useHistory();

	return (
		<section className="container product-details">
			<span className="go-back" onClick={() => history.goBack()}>
				Go Back
			</span>

			<picture className="product-image">
				<source
					srcSet={product.image.desktop.replace("./", "../")}
					media="(min-width:1024px)"
				/>
				<source
					srcSet={product.image.tablet.replace("./", "../")}
					media="(min-width:768px)"
				/>
				<img
					src={product.image.mobile.replace("./", "../")}
					alt={product.name}
				/>
			</picture>

			<div className="content">
				{product.new ? <span className="new-product">NEW PRODUCT</span> : ""}
				<h1 className="title">{product.name}</h1>
				<p className="tagline">{product.description}</p>
				<span className="price">$ {product.price.toLocaleString()}</span>

				<div className="shop">
					<div className="quantity">
						<button className="decrease">-</button>
						<span className="amount">1</span>
						<button className="increase">+</button>
					</div>
					<CustomButton>Add to Cart</CustomButton>
				</div>
			</div>

			<div className="features">
				<h2 className="title">Features</h2>
				{product.features.split("\n\n").map((tagline, index) => (
					<p key={index} className="tagline">
						{tagline}
					</p>
				))}
			</div>

			<div className="included">
				<h2 className="title">In The Box</h2>
				<ul className="list">
					{product.includes.map((item, index) => (
						<li className="item" key={index}>
							<span>{`${item.quantity}x`}</span> {item.item}
						</li>
					))}
				</ul>
			</div>

			<div className="gallery">
				{Object.keys(product.gallery).map((image, index) => (
					<div className="image" key={index}>
						<picture>
							<source
								srcSet={product.gallery[image].desktop.replace("./", "../")}
								media="(min-width:1024px)"
							/>
							<source
								srcSet={product.gallery[image].tablet.replace("./", "../")}
								media="(min-width:768px)"
							/>
							<img
								src={product.gallery[image].mobile.replace("./", "../")}
								alt=""
							/>
						</picture>
					</div>
				))}
			</div>

			<div className="suggested">
				<h2 className="title">YOU MAY ALSO LIKE</h2>
				<div className="suggested-container">
					{product.others.map((item) => (
						<div className="suggested-product" key={item.slug}>
							<picture className="image">
								<source
									srcSet={item.image.desktop.replace("./", "../")}
									media="(min-width:1024px)"
								/>
								<source
									srcSet={item.image.tablet.replace("./", "../")}
									media="(min-width:768px)"
								/>
								<img
									src={item.image.mobile.replace("./", "../")}
									alt={item.name}
								/>
							</picture>

							<h3 className="title">{item.name}</h3>
							<CustomButton>See Product</CustomButton>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProductDetails;
