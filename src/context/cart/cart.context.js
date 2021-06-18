import { createContext, useReducer, useEffect } from "react";

import cartReducer from "./cart.reducer";

export const CartContext = createContext();

const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

const INITIAL_STATE = {
	cartHidden: true,
	cart: cartItems,
};

const CartContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

	const addItem = (item, quantity) => {
		dispatch({ type: "ADD_TO_CART", payload: { ...item, quantity: quantity } });
	};

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(state.cart));
	}, [state.cart]);

	const value = { ...state, addItem };

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
