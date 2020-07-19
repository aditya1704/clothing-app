import React from 'react'
import CollectionItem from '../components/collection-item/CollectionItem'
import './CollectionPage.scss'



const CollectionPage = ({collections,match}) => {
    const COLLECTION_ID_MAP={
        hats:1,
        sneakers:2,
        jackets:3,
        womens:4,
        mens:5
       }

       const SelectCollection = collectionUrlParam =>(
           collections.find(collection=>collection.id===COLLECTION_ID_MAP[collectionUrlParam])
       )
       const collection = SelectCollection(match.params.collectionId);
        const {items}=collection
    return (
        <div className='collection-page'>
            <h2 className='title'>{items.title}</h2>
            <div className='items'>
                {items.map(item=>(<CollectionItem key={item.id} item={item}/>))}
           </div>
        </div>
    )
}

export default CollectionPage
