import React from 'react';
import CollectionPreview from './../CollectionPreview';
import SHOP_DATA from './../../data/shop.data';
import './ShopPage.css';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        return (
            <div className="container">
                {
                    SHOP_DATA.map((shopItem) => {
                        return (
                            <div key={shopItem.id}  className="collection_container">
                                <h1 className="title">{shopItem.title.toUpperCase()}</h1>
                                <div className="columns is-multiline">
                                    <CollectionPreview data={shopItem}/>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default ShopPage;