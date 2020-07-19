import React, { Component } from 'react'
import SHOP_DATA from '../assets/shop.data'
import CollectionOverview from '../components/collection-overview/CollectionOverview'
import CollectionPage from './CollectionPage'
import {Route} from 'react-router-dom' 
export default class ShopPage extends Component {
    state={
        collections:SHOP_DATA
    }

    
    render() {
       const {collections}=this.state
       const {match} =this.props

        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props)=><CollectionOverview collections={collections}/>}/>
                <Route  path={`${match.path}/:collectionId`} render={(props)=><CollectionPage collections={collections}{...props}/>}/>
            </div>
        )
    }
}
