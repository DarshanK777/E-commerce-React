import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_7XRQ4ptQVQkrQwRqULZOhQJA00UAPMHgbP'

    const onToken = token => {
        console.log(token)
        alert('Payment Successfull')
    }
    
    return (
        <StripeCheckout
        label = 'pay Now'
        name = 'E-comm'
        billingAddress
        shippingAddress
        image  = 'https://svgshare.com/i/CUz.svg'
        description = {`your Total is $${price}`}
        amount = {priceForStripe}
        panelLabel = 'Pay Now'
        token = {onToken}
        stripeKey = {publishableKey}
        />
    )
}

export default StripeCheckoutButton;