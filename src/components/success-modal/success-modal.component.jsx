import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/cart/cart.context';

import CustomButton from '../custom-button/custom-button.component';

import './success-modal.styles.scss';

const SuccessModal = () => {
	const { cart } = useContext(CartContext);

	const firstItem = cart[0];
	const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

	const totalPrice =
		cart.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0;
	const vat = Math.round((totalPrice * 20) / 100);
	const grandTotal = totalPrice + 50 + vat;

	return (
		<>
			<div className='overlay'></div>
			<div className='container success'>
				<div className='check-container'>
					<span className='check'>&#10003;</span>
				</div>
				<h3 className='title'>
					Thank You <br /> For Your Order
				</h3>

				<div className='order-summary'>
					<div className='cart-items'>
						<div className='item'>
							<img src={firstItem.image.mobile.replace('./', '/')} alt='' />
							<div className='item-content'>
								<h3 className='item-title'>{firstItem.nickname}</h3>
								<span className='item-total-price'>
									$ {(firstItem.price * firstItem.quantity).toLocaleString()}
								</span>
							</div>
							<span className='quantity'>x{firstItem.quantity}</span>
						</div>

						{cart.length > 1 && (
							<p className='tagline'>
								and {totalQuantity - firstItem.quantity} other items(s)
							</p>
						)}
					</div>
					<div className='total'>
						<span className='title'>Grand Total</span>
						<span className='price'>$ {grandTotal.toLocaleString()}</span>
					</div>
				</div>

				<Link to='/'>
					<CustomButton>Back to Home</CustomButton>
				</Link>
			</div>
		</>
	);
};

export default SuccessModal;
