import React from 'react';
import FormInput from './../FormInput';
import CustomButton from './../CustomButton';
import {signInWithGoogle} from './../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        });
    }

    handleChange = (event) => {
        let {name, value} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className="column signIn_form-container is-half">   
                <h3 className="title is-4">I already have an account</h3>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label="Email"
                        className="input"
                        name="email"
                        type="email"
                        value={this.state.email}
                        placeholder="Type your email"
                        handleChange={this.handleChange}
                    />

                    <FormInput
                        label="Password"
                        className="input"
                        name="password"
                        type="password"
                        value={this.state.password}
                        placeholder="Type your password"
                        handleChange={this.handleChange}
                    />

                    <div className="field is-grouped">
                        <CustomButton className="button is-info">
                            Submit
                        </CustomButton>

                        <CustomButton signClick={signInWithGoogle} className="button is-info">
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;