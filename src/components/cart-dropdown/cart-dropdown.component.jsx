import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss'
import { withRouter } from 'react-router-dom'
import CartItem from '../cart-item/cart-item.component.js'
import {connect} from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartDropdown = ({ cartItems, history,dispatch }) => (
    <div className = 'cart-dropdown'>
    <div className = 'cart-items'>
    {   
        cartItems.length?
        cartItems.map(
            cartItem=>(
                <CartItem key = {cartItem.id} item = {cartItem}></CartItem>
            )
        ):
        (
            <span className = 'empty-message'> cart is empty </span>
        )
    }
    </div>
        <CustomButton onClick= {() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())

     }}
        >Go To CheckOUT</CustomButton>
    </div>
)

const mapStateTOProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateTOProps)(CartDropdown) );