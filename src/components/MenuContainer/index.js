import React from 'react';
import MenuItem from './../MenuItem';
import SECTIONS from './../../data/directory.data';

function MenuComponent() {
   return (
      <div className="columns is-multiline is-centered">
         {
            SECTIONS.map((section) => {
               return <MenuItem key={section.id} section={section} />
            })
         }
      </div>
   );
}

export default MenuComponent;