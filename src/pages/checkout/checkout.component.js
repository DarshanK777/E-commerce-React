import React from 'react'
import './checkout.styles.scss'
import { connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
import { CheckoutPageStyles, CheckoutHeaderStyles, HeaderBlockStyles, TotalStyles} from './checkout.styles'


const CheckoutPage= ({ cartItems, total})=>(
    <CheckoutPageStyles>
        <CheckoutHeaderStyles>
            <HeaderBlockStyles>
                <span>Product</span>
            </HeaderBlockStyles>
            <HeaderBlockStyles >
                <span>Description</span>
            </HeaderBlockStyles>
            <HeaderBlockStyles >
                <span>Quantity</span>
            </HeaderBlockStyles>
            <HeaderBlockStyles >
                <span>Price</span>
            </HeaderBlockStyles>
            <HeaderBlockStyles>
                <span>Remove</span>
            </HeaderBlockStyles>
        </CheckoutHeaderStyles>
        {
            cartItems.map(cartItem =>
                (
                    <CheckoutItem key = {cartItem.id} cartItem = {cartItem}/> 
                ))
        }
        <TotalStyles >
            <span> Total : ${total}</span>
        </TotalStyles>
        <StripeCheckoutButton/>
    </CheckoutPageStyles>
    
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total : selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);