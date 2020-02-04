import React from 'react';
import {withRouter} from 'react-router-dom';

function pageRedirection(properties) {
    const {history} = properties;
    history.push('/shop');
}

function MenuItem(props) {
    const {section} = props;
    return (
        <div className="column is-one-third">
            <div className="card" onClick={() => pageRedirection(props)}>
                <div className="card-header">
                    <div className="card-header-title">
                        <h1 className="title is-6">{section.title.toUpperCase()}</h1>
                    </div>
                </div>

                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={section.imageUrl} alt="Card" className="card-image-item"/>
                    </figure>
                </div>
            </div>
        </div>
    );
}

export default withRouter(MenuItem);