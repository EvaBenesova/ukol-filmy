import React from 'react';
import './movie.scss';
import Actor from '../Actor/Actor';





const Movie = ({ title, poster, year, rating, director, genre, cast }) => {
   return (
      <div className='content'>
         <img src={`../assets/${poster}`} alt={title} className='content__img' />
         <div className='content__item'>
            <h2 className='content__item-title'>{title}</h2>
            <p className='content__item-par'><strong>Rok vydání:</strong> {year} </p>
            <p className='content__item-par'><strong>Žánr:</strong> {genre} </p>
            <p className='content__item-par'><strong>Režie:</strong> {director} </p>
            <div className='content__cast'>
               <h3 className='content__cast-title'>V hlavních rolích:</h3>
               {cast.map(castMember=>
                  <Actor
                     name={castMember.name}
                     as={castMember.as}
                  />
               )}</div>
         </div>
         <p className='content__rating'><strong>{rating}</strong>/10</p>
      </div>

   )
}


export default Movie;
