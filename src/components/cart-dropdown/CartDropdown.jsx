import React from 'react'
import './CartDropDown.scss'
import Button from '../form/Button'
import {connect} from 'react-redux'
import CartItem from '../cart-item/CartItem'
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from '../../redux/cart/cartAction'

const CartDropdown = ({cartItems,history,dispatch}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                { cartItems.length?
                    cartItems.map(cartItem=>{
                    console.log(cartItem)
                    return(<CartItem key={cartItem.id} item={cartItem} />)
                })
                :<span className='empty-message'>Your cart is Empty</span>
            }

                
            </div>
            <Button onClick={()=>{
                dispatch(toggleCartHidden())
                history.push('/checkout')
                }}>GO TO CHECKOUT</Button>
            
        </div>
    )
}


const mapStateToProps = ({cart:{cartItems}})=>({
    cartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
