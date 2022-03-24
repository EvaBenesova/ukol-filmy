import React from 'react';
import './actor.scss';

const Actor = ({ name, as }) => {
   return (
      <div className='content__cast'>
         <p className='content__cast-par'><strong>{name}</strong> as {as}</p>
      </div>
   )
}

export default Actor;
