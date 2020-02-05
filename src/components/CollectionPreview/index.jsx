import React from 'react';
import CollectionItem from './../CollectionItem/index.jsx';

function CollectionPreview(props) {
    const {data} = props;
    return (
        data.items.filter((item, index) => index < 4).map((item) => {
            return (
                <CollectionItem item={item} />
            )
        })
    );
}

export default CollectionPreview;