import React  from 'react';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitCardForm from './SplitCardForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IeCcbGITGXbVZxk25HnIaQkRzWscaYItyfXNAN1tioDi3cXgU6YtKhkb9J384Gm2oKswxMi1JkyE93MWGDQ30Iz003RQvF6XL');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment}/>
        </Elements>
    );
};

export default ProcessPayment;