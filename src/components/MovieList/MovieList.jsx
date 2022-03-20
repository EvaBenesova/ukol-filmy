import React from 'react';
import Movie from '../Movie/Movie';


const MovieList = ({ movies }) => {
   return (
      <>
         {movies.map (key => 
         <Movie
            poster={key.poster}
            title={key.title}
            year={key.year}
            genre={key.genre}
            director={key.director}
            rating={key.rating}
            />)}
         
      </>
   )
}


export default MovieList;





