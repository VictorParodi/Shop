import React from 'react';
import MenuComponent from './components/MenuContainer';
import './App.css';

function App() {
   return (
      <section className="main-container">
         <section className="hero is-primary">
            <div className="hero-body">
               <div className="container">
                  <h1 className="title">Hero Title</h1>
                  <h2 className="subtitle">A brand new website</h2>
               </div>
            </div>
         </section>

         <div className="container second-container">
            <MenuComponent />
         </div>
      </section>
   );
}

export default App;
