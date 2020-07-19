import React from 'react';
import CollectionPreview from '../collection-preview/CollectionPreview';

import './CollectionOverview.scss';

const CollectionOverview =({collections})=>(
    <div className='collections-overview'>
        {collections.map(({id,...otherCollectionProps})=>(
                    <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
)

export default CollectionOverview;