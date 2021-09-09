import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { loadStripe } from '@stripe/stripe-js';
import {
	CardElement,
	useStripe,
	Elements,
	useElements,
} from '@stripe/react-stripe-js';
import axios from 'axios';

import { CartContext } from '../../context/cart/cart.context';
import SuccessModal from '../success-modal/success-modal.component';

import './StripeCheckout.scss';

const promise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`);

const CheckoutForm = () => {
	const { cart, clearCart } = useContext(CartContext);
	const totalPrice =
		cart.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0;
	const tax = Math.round((totalPrice * 20) / 100);
	const grandTotal = totalPrice + 50 + tax;
	const history = useHistory();

	// STRIPE STUFF
	const [succeeded, setSucceeded] = useState(false);
	const [error, setError] = useState(null);
	const [processing, setProcessing] = useState('');
	const [disabled, setDisabled] = useState(true);
	const [clientSecret, setClientSecret] = useState('');
	const stripe = useStripe();
	const elements = useElements();

	const cardStyle = {
		style: {
			base: {
				color: '#32325d',
				fontFamily: 'Arial, sans-serif',
				fontSmoothing: 'antialiased',
				fontSize: '16px',
				'::placeholder': {
					color: '#32325d',
				},
			},
			invalid: {
				color: '#fa755a',
				iconColor: '#fa755a',
			},
		},
	};

	const createPaymentIntent = async () => {
		try {
			const { data } = await axios.post(
				'/.netlify/functions/create-payment-intent',
				JSON.stringify({ cart, grandTotal })
			);
			setClientSecret(data.clientSecret);
		} catch (error) {}
	};

	useEffect(() => {
		createPaymentIntent();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleChange = async (event) => {
		setDisabled(event.empty);
		setError(event.error ? event.error.message : '');
	};
	const handleSubmit = async (ev) => {
		ev.preventDefault();
		setProcessing(true);

		const payload = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement),
			},
		});

		if (payload.error) {
			setError(`Payment failed ${payload.error.message}`);
			setProcessing(false);
		} else {
			setError(null);
			setSucceeded(true);
			setTimeout(() => {
				clearCart();
				setSucceeded(false);
				history.push('/');
			}, 10000);
		}
	};

	return (
		<div className='stripe-payment-container'>
			{succeeded ? (
				<SuccessModal />
			) : (
				<p>Test Card Number : 4242 4242 4242 4242</p>
			)}
			<form id='payment-form' onSubmit={handleSubmit}>
				<CardElement
					id='card-element'
					options={cardStyle}
					onChange={handleChange}
				/>
				<button disabled={processing || disabled || succeeded} id='submit'>
					<span id='button-text'>
						{processing ? <div className='spinner' id='spinner'></div> : 'Pay'}
					</span>
				</button>
				{/* Show any error that happens when processing the payment */}
				{error && (
					<div className='card-error' role='alert'>
						{error}
					</div>
				)}
				{/* Show Success message upon completion */}
				<p className={succeeded ? 'result-message' : 'result-message hidden'}>
					Payment Successful
				</p>
			</form>
		</div>
	);
};

const StripeCheckout = () => {
	return (
		<Elements stripe={promise}>
			<CheckoutForm />
		</Elements>
	);
};

export default StripeCheckout;
