import { useState, useContext } from "react";

import { CartContext } from "../../context/cart/cart.context";

import FormInput from "../form-input/form-input.component";

import "./checkout-form.styles.scss";

const INITIAL_STATE = {
	name: "",
	email: "",
	phone: "",
	address: "",
	zip: "",
	city: "",
	country: "",
};

const CheckoutForm = ({ toggleSuccess }) => {
	const { clearCart } = useContext(CartContext);
	const [inputs, setInputs] = useState(INITIAL_STATE);

	const handleSubmit = (e) => {
		e.preventDefault();

		setInputs(INITIAL_STATE);
		clearCart();
		toggleSuccess();
		window.scrollTo(90, 0);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setInputs({ ...inputs, [name]: value });
	};

	return (
		<form id="checkoutForm" className="checkout-form" onSubmit={handleSubmit}>
			<h1 className="title">CHECKOUT</h1>

			<div className="form-group">
				<h3 className="form-group-title">BILLING DETAILS</h3>
				<FormInput
					name="name"
					type="text"
					label="Name"
					value={inputs.name}
					placeholder="Alexi Ward"
					required
					handleChange={handleChange}
				/>
				<FormInput
					name="email"
					type="email"
					label="Email Address"
					value={inputs.email}
					placeholder="alexei@mail.com"
					required
					handleChange={handleChange}
				/>
				<FormInput
					name="phone"
					type="tel"
					label="Phone Number"
					value={inputs.phone}
					placeholder="555-555-5555"
					required
					handleChange={handleChange}
				/>
			</div>

			<div className="form-group">
				<h3 className="form-group-title">SHIPPING INFO</h3>
				<FormInput
					name="address"
					type="text"
					label="Address"
					value={inputs.address}
					placeholder="5555 Example Avenue"
					required
					handleChange={handleChange}
				/>
				<FormInput
					name="zip"
					type="number"
					label="ZIP Code"
					value={inputs.zip}
					placeholder="10001"
					required
					handleChange={handleChange}
				/>
				<FormInput
					name="city"
					type="text"
					label="City"
					value={inputs.city}
					placeholder="New York"
					required
					handleChange={handleChange}
				/>
				<FormInput
					name="country"
					type="text"
					label="Country"
					value={inputs.country}
					placeholder="United States"
					required
					handleChange={handleChange}
				/>
			</div>

			<div className="form-group">
				<h3 className="form-group-title">PAYMENT DETAILS</h3>

				<p className="tagline">
					'Cash on Delivery' enables you to pay in cash when our delivery
					courier arrives at your residence. Just make sure your address is
					correct so that your order will not be cancelled.
				</p>
			</div>
		</form>
	);
};

export default CheckoutForm;
