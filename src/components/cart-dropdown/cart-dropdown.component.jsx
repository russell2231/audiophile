import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/cart/cart.context";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
	const { cart, toggleCart, clearCart } = useContext(CartContext);

	const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0) || 0;
	const totalPrice =
		cart.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0;

	return (
		<>
			<div className="overlay" onClick={toggleCart}></div>
			<div className="container cart-dropdown-container">
				<div className="cart-dropdown">
					<h2 className="title">CART ({totalQuantity})</h2>
					{cart.length > 0 && (
						<span className="clear-cart" onClick={clearCart}>
							Remove all
						</span>
					)}
					<div className="cart">
						{cart.map((item) => (
							<CartItem item={item} key={item.id} />
						))}
					</div>
					<span className="total">TOTAL</span>
					<span className="total-price">$ {totalPrice.toLocaleString()}</span>
					{cart.length > 0 && (
						<Link className="custom-button-link" to="/checkout">
							<CustomButton>Checkout</CustomButton>
						</Link>
					)}
				</div>
			</div>
		</>
	);
};

export default CartDropdown;
