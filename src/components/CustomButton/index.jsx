import React from 'react';
import './CustomButton.css';

function CustomButton(props) {
    return (
        <div className="field custom-button">
            <button onClick={props.signClick} className={props.className}>
                {props.children}
            </button>
        </div>
    );
}

export default CustomButton;