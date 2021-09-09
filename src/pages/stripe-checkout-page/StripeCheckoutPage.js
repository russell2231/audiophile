import StripeCheckout from '../../components/stripe-checkout/StripeCheckout';
import CheckoutSummary from '../../components/checkout-summary/checkout-summary.component';
import Showcase from '../../components/showcase/showcase.component';

import './StripeCheckoutPage.scss';

const StripeCheckoutPage = () => {
	return (
		<main className='stripe-checkout'>
			<div className='container stripe-checkout-container'>
				<StripeCheckout />
				<CheckoutSummary disabled={true} />
			</div>
			<Showcase />
		</main>
	);
};

export default StripeCheckoutPage;
