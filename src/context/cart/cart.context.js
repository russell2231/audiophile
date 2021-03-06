import { createContext, useReducer, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import cartReducer from './cart.reducer';

export const CartContext = createContext();

const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

const INITIAL_STATE = {
	cartHidden: true,
	cart: cartItems,
};

const CartContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
	const location = useLocation();

	const toggleCart = () => {
		dispatch({ type: 'TOGGLE_CART' });
	};

	const addItem = (item, quantity) => {
		dispatch({ type: 'ADD_TO_CART', payload: { ...item, quantity: quantity } });
	};

	const increaseItem = (item) => {
		dispatch({ type: 'INCREASE_ITEM', payload: item });
	};

	const removeItem = (item) => {
		dispatch({ type: 'REMOVE_ITEM', payload: item });
	};

	const clearCart = () => {
		dispatch({ type: 'CLEAR_CART' });
	};

	const usePrevious = (value) => {
		const ref = useRef();
		useEffect(() => {
			ref.current = value;
		});
		return ref.current;
	};

	const prevCart = usePrevious(state.cart);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(state.cart));
	}, [state.cart]);

	useEffect(() => {
		if (state.cartHidden === false) {
			toggleCart();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location]);

	const value = {
		...state,
		addItem,
		toggleCart,
		clearCart,
		increaseItem,
		removeItem,
		prevCart,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
