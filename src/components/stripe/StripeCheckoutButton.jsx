import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    
const publishKey="pk_test_51H5FDBHyZHSF3KqE9e5pQYzC7lbkfQGU5AcoJ5izrWVrv651d6QCVTdRG5wiiHpPUq7tSQTJJWuLspsxSf7DWidk00OWFTVfuR"

const priceForStripe=price*100;

const onToken=token=>{
    alert('Payment Successful')
}
    return (
        <StripeCheckout 
            label='Pay Now'
            name='Clothing App'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishKey}
        />
    )
}

export default StripeCheckoutButton
