import React from 'react';
import './movie.css';



const Movie = ({title, poster, year, rating, director, genre, cast}) => {
   return (
      <div className='content'>
         <img src='./assets/{title}.jpg' />
         <h2>{title}</h2>
         <p>Rok vydání: {year} </p>
         <p>Žánr: {genre} </p>
         <p>Režie: {director} </p>
         <p>{rating}/10</p>
      </div>

   )
}


export default Movie;
