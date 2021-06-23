import { useContext } from "react";

import { CartContext } from "../../context/cart/cart.context";

import "./cart-item.styles.scss";

const CartItem = ({ item }) => {
	const { increaseItem, removeItem } = useContext(CartContext);

	return (
		<div className="cart-item">
			<img src={item.image.mobile.replace("./", "/")} alt="" />
			<div className="item-content">
				<h3 className="item-title">{item.nickname}</h3>
				<span className="item-total-price">
					$ {(item.price * item.quantity).toLocaleString()}
				</span>
			</div>
			<div className="item-quantity">
				<button className="decrease" onClick={() => removeItem(item)}>
					-
				</button>
				<span className="item-amount">{item.quantity}</span>
				<button className="increase" onClick={() => increaseItem(item)}>
					+
				</button>
			</div>
		</div>
	);
};

export default CartItem;
