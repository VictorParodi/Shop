import React from 'react';
import './CollectionItem.css';

function CollectionItem(props) {
    const {item} = props;
    return (
        <div key={item.id} className="column is-one-quarter">
            <div className="card">
                <div className="card-image image-container">
                    <figure className="image is-4by3">
                        <img src={item.imageUrl} alt="Card" className="card-image-item"/>
                    </figure>
                </div>

                <div className="card-footer">
                    <div className="card-footer-item">{item.name}</div>
                    <div className="card-footer-item">{`$${item.price}`}</div>
                </div>
            </div>
        </div>
    );
}

export default CollectionItem;