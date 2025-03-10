import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { handleToken } from '../../redux/auth/auth.actions';

const Checkout = ({ handleToken }) => (
  <StripeCheckout
    name="Emaily"
    amount={500}
    description="$5 for 5 email credits"
    token={(token) => handleToken(token)}
    stripeKey={process.env.REACT_APP_STRIPE_KEY}
  >
    <button className="btn">Add Credits</button>
  </StripeCheckout>
);

export default connect(null, { handleToken })(Checkout);
