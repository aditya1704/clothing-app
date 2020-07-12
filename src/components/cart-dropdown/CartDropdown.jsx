import React from 'react'
import './CartDropDown.scss'
import Button from '../form/Button'
import {connect} from 'react-redux'
import CartItem from '../cart-item/CartItem'
const CartDropdown = ({cartItems}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.map(cartItem=>{
                    console.log(cartItem)
                    return(<CartItem key={cartItem.id} item={cartItem} />)
                }
                )}

                
            </div>
            <Button >GO TO CHECKOUT</Button>
            
        </div>
    )
}


const mapStateToProps = ({cart:{cartItems}})=>({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown)
