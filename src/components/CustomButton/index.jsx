import React from 'react';

function CustomButton(props) {
    return (
        <div className="field">
            <button className={props.className}>
                {props.children}
            </button>
        </div>
    );
}

export default CustomButton;