import React from 'react';

function CollectionPreview(props) {
    const {data} = props;
    return (
        data.items.filter((item, index) => index < 4).map((item) => {
            return (
                <div key={item.id} className="column is-one-quarter">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-header-title">
                                <h1 className="title is-6">{item.name}</h1>
                            </div>
                        </div>

                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src={item.imageUrl} alt="Card" className="card-image-item"/>
                            </figure>
                        </div>
                    </div>
                </div>
            )
        })
    );
}

export default CollectionPreview;