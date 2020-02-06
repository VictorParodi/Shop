import React from 'react';
import SignIn from './../../components/SignIn';
import './SignInUp.css';

function SignInUp() {
    return (
        <div className="container forms-container">
            <div className="columns is-multiline">
                <SignIn />
            </div>
        </div>
    );
}

export default SignInUp;