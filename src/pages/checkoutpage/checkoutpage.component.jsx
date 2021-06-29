import { useState } from "react";
import { useHistory } from "react-router-dom";

import CheckoutForm from "../../components/checkout-form/checkout-form.component";
import CheckoutSummary from "../../components/checkout-summary/checkout-summary.component";
import SuccessModal from "../../components/success-modal/success-modal.component";

import "./checkoutpage.styles.scss";

const CheckoutPage = () => {
	const [success, setSuccess] = useState(false);
	const history = useHistory();

	const toggleSuccess = () => {
		setSuccess(!success);
	};

	return (
		<main className="checkout-page">
			<div className="container checkout-page-container">
				<span className="go-back" onClick={() => history.goBack()}>
					Go Back
				</span>
				<CheckoutForm toggleSuccess={toggleSuccess} />
				<CheckoutSummary />
			</div>

			{success && <SuccessModal />}
		</main>
	);
};

export default CheckoutPage;
