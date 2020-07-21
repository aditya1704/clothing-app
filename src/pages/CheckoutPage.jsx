import React from 'react'
import {connect} from 'react-redux'
import './CheckoutPage.scss'
import CheckoutItem from '../components/checkout-item/CheckoutItem'
import StripeCheckoutButton from '../components/stripe/StripeCheckoutButton'
const CheckoutPage = ({cartItems,total}) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem=><CheckoutItem cartItem={cartItem} key={cartItem.id}/>)
            }
            <div className='total'>TOTAL: <span>&#8377;</span>{total}</div>
            <div className='warning'>
                ***Please Use the following credit card for payments***
                <br/>
                4242 4242 4242 4242 Exp:01/20 CVV:123 
            </div>
            <StripeCheckoutButton price={total}/>
        </div>
    )
}

const mapStateToProps = ({cart:{cartItems}})=>({
    itemCount:cartItems.reduce((totalQuantity,cartItem)=>totalQuantity+cartItem.quantity,0),
    total:cartItems.reduce((totalPrice,cartItem)=>totalPrice+cartItem.quantity*cartItem.price,0),
    cartItems:cartItems
})

export default connect(mapStateToProps)(CheckoutPage)
