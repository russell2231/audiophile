const cartReducer = (state, action) => {
	switch (action.type) {
		case "TOGGLE_CART":
			return { ...state, cartHidden: !state.cartHidden };
			break;

		case "ADD_TO_CART":
			return { ...state, cart: [...state.cart, action.payload] };
			break;

		case "INCREASE_ITEM":
			return {
				...state,
				cart: state.cart.map((cartItem) =>
					cartItem.id === action.payload.id
						? { ...cartItem, quantity: cartItem.quantity + 1 }
						: cartItem
				),
			};
			break;

		case "REMOVE_ITEM":
			const existingItem = state.cart.find(
				(cartItem) => cartItem.id === action.payload.id
			);

			if (existingItem.quantity === 1) {
				return {
					...state,
					cart: state.cart.filter(
						(cartItem) => cartItem.id !== action.payload.id
					),
				};
			}

			return {
				...state,
				cart: state.cart.map((cartItem) =>
					cartItem.id === action.payload.id
						? { ...cartItem, quantity: cartItem.quantity - 1 }
						: cartItem
				),
			};
			break;

		case "CLEAR_CART":
			return { ...state, cart: [] };
			break;

		default:
			return state;
	}
};

export default cartReducer;
