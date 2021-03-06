import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from './../../assets/crown.svg';
import {auth} from './../../firebase/firebase.utils';

function Header(props) {
    return (
        <section className="hero is-info is-medium">
            <div className="hero-head">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <Link className="navbar-item" to="/">
                                <Logo />
                            </Link>
                        </div>

                        <div className="navbar-menu">
                            <div className="navbar-end">
                                <Link className="navbar-item" to="/shop">SHOP</Link>
                                {
                                    props.currentUser ?
                                    <span
                                        onClick={() => auth.signOut()}
                                        className="navbar-item"
                                    >
                                        SIGN OUT
                                    </span>
                                    : <Link className="navbar-item" to="/signIn">SIGN IN</Link>
                                }
                                <Link className="navbar-item" to="/shop">CONTACT</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title">Welcome to Super Shop!</h1>
                    <h2 className="subtitle">Awesome place to shopping</h2>
                </div>
            </div>
        </section>
    );
}

export default Header;