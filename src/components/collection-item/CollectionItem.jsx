import React from 'react'
import './collection-item.scss'
import Button from '../form/Button'

import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cartAction'

const CollectionItem = ({item,addItem}) => {
    const {name,price,imageUrl}=item
    return (
        <div className='collection-item'>
            <div className='image' style={{backgroundImage:`url(${imageUrl})`}} />
            <div className='collection-footer'>
                <span className='name' >{name}</span>
                <span className='price'>{price}</span>    
            </div>
            <Button inverted onClick={()=>addItem(item)}>Add to cart</Button>
        </div>
    )
}
//This creates a function addItem which recieves item and dispatches it.
const mapDispatchToProps = dispatch => ({
    addItem: item=>dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem)
