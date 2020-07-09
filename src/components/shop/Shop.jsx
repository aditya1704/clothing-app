import React, { Component } from 'react'
import SHOP_DATA from '../../assets/shop.data'
import CollectionPreview from '../collection-preview/CollectionPreview'
export default class Shop extends Component {
    state={
        collections:SHOP_DATA
    }
    render() {
       const {collections}=this.state
        return (
            <div className='shop-page'>
                {collections.map(({id,...otherCollectionProps})=>(
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
            </div>
        )
    }
}
