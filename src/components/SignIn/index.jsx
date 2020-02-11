import React from 'react';

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
        console.log(event.target);
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
                    <div className="field">
                        <label className="label">Email</label>
                        <input
                            className="input"
                            name="email"
                            type="email"
                            value={this.state.email}
                            placeholder="Type your email"
                            onChange={this.handleChange}
                            required
                        />
                    </div>

                    <div className="field">
                        <label className="label">Password</label>
                        <input
                            className="input"
                            name="password"
                            type="password"
                            value={this.state.password}
                            placeholder="Type a password"
                            onChange={this.handleChange}
                            required
                        />
                    </div>

                    <div className="field">
                        <button className="button is-info">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;