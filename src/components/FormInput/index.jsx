import React from 'react';

function FormInput(props) {
    return (
        <div className="field">
            <label className="label">{props.label}</label>
            <input
                className={props.className}
                name={props.name}
                type={props.type}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.handleChange}
                required
            />
        </div>
    );
}

export default FormInput;