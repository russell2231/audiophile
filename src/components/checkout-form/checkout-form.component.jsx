import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import FormInput from '../form-input/form-input.component';

import './checkout-form.styles.scss';

const INITIAL_STATE = {
	name: '',
	email: '',
	phone: '',
	address: '',
	zip: '',
	city: '',
	state: '',
};

const CheckoutForm = ({ toggleSuccess }) => {
	const history = useHistory();
	const [inputs, setInputs] = useState(INITIAL_STATE);

	const handleSubmit = (e) => {
		e.preventDefault();

		setInputs(INITIAL_STATE);
		history.push('/pay');
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setInputs({ ...inputs, [name]: value });
	};

	return (
		<form id='checkoutForm' className='checkout-form' onSubmit={handleSubmit}>
			<h1 className='title'>CHECKOUT</h1>

			<div className='form-group'>
				<h3 className='form-group-title'>BILLING DETAILS</h3>
				<FormInput
					name='name'
					type='text'
					label='Name'
					value={inputs.name}
					required
					handleChange={handleChange}
				/>
				<FormInput
					name='email'
					type='email'
					label='Email Address'
					value={inputs.email}
					required
					handleChange={handleChange}
				/>
				<FormInput
					name='phone'
					type='tel'
					label='Phone Number'
					value={inputs.phone}
					required
					handleChange={handleChange}
				/>
			</div>

			<div className='form-group'>
				<h3 className='form-group-title'>SHIPPING INFO</h3>
				<FormInput
					name='address'
					type='text'
					label='Address'
					value={inputs.address}
					required
					handleChange={handleChange}
				/>
				<FormInput
					name='zip'
					type='number'
					label='ZIP Code'
					value={inputs.zip}
					required
					handleChange={handleChange}
				/>
				<FormInput
					name='city'
					type='text'
					label='City'
					value={inputs.city}
					required
					handleChange={handleChange}
				/>
				<FormInput
					name='state'
					type='text'
					label='State'
					value={inputs.state}
					required
					handleChange={handleChange}
				/>
			</div>
		</form>
	);
};

export default CheckoutForm;
