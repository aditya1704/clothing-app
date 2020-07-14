import React from 'react'
import {connect} from 'react-redux'
import './CheckoutPage.scss'
import CheckoutItem from '../components/checkout-item/CheckoutItem'
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
            <div className='total'>TOTAL: ${total}</div>
        </div>
    )
}

const mapStateToProps = ({cart:{cartItems}})=>({
    itemCount:cartItems.reduce((totalQuantity,cartItem)=>totalQuantity+cartItem.quantity,0),
    total:cartItems.reduce((totalPrice,cartItem)=>totalPrice+cartItem.quantity*cartItem.price,0),
    cartItems:cartItems
})

export default connect(mapStateToProps)(CheckoutPage)
