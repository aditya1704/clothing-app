import React from 'react'
import './CartItem.scss'
const CartItem = ({item:{imageUrl,name,price,quantity}}) => {
    
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt='cart'/>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x <span>&#8377;</span>{price}</span>
            </div>
            
        </div>
    )
}

export default CartItem
