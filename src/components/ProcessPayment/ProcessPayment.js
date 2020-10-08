
import React from 'react';
import {Elements, CardElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleProcessForm from './SimpleProcessForm';
import SplitCard from './SplitCard';


const stripePromise = loadStripe('pk_test_51HZfyTAfwGFwKLkgOiPXa4vLwSKwghkuwmKnL0ZwLjHDayqhJv0Fu88EOY2JUgCsPNRyQRxGKCRPoN3ua6zjDanA00UAHn5Q1H');

const ProcessPayment = () => {
  return (
    <Elements stripe={stripePromise}>
      <SplitCard/>
    </Elements>
  );
};

export default ProcessPayment;