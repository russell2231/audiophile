import { useContext } from "react";

import { CartContext } from "../../context/cart/cart.context";

import CustomButton from "../custom-button/custom-button.component";

import "./checkout-summary.styles.scss";

const CheckoutSummary = () => {
	const { cart } = useContext(CartContext);

	const totalPrice =
		cart.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0;
	const tax = Math.round((totalPrice * 20) / 100);
	const grandTotal = totalPrice + 50 + tax;

	return (
		<div className="summary">
			<h2 className="summary-title">SUMMARY</h2>
			<div className="cart">
				{cart.map((item) => (
					<div className="cart-item" key={item.id}>
						<div className="item">
							<img src={item.image.mobile.replace("./", "/")} alt="" />
							<div className="item-content">
								<h3 className="item-title">{item.nickname}</h3>
								<span className="item-total-price">
									$ {(item.price * item.quantity).toLocaleString()}
								</span>
							</div>
						</div>
						<span className="quantity">x{item.quantity}</span>
					</div>
				))}
			</div>

			<div className="total">
				<span className="title">TOTAL</span>
				<span className="tagline">$ {totalPrice.toLocaleString()}</span>
			</div>
			<div className="total">
				<span className="title">SHIPPING</span>
				<span className="tagline">$ 50</span>
			</div>
			<div className="total">
				<span className="title">TAX</span>
				<span className="tagline">$ {tax.toLocaleString()}</span>
			</div>
			<div className="total">
				<span className="title">GRAND TOTAL</span>
				<span className="tagline">$ {grandTotal.toLocaleString()}</span>
			</div>

			<CustomButton type="submit" form="checkoutForm">
				Continue
			</CustomButton>
		</div>
	);
};

export default CheckoutSummary;
