import React from 'react';
import MenuComponent from './components/MenuContainer';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <section className="main-container">
                <div className="container second-container">
                    <MenuComponent />
                </div>
            </section>
        );
    }
}

export default App;
