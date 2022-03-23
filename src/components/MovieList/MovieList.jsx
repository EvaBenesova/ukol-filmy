import React from 'react';
import Movie from '../Movie/Movie';
import './movieList.scss'


const MovieList = ({ movies }) => {
   return (
      <section className='container'>
         {movies.map (key => 
         <Movie
            poster={key.poster}
            title={key.title}
            year={key.year}
            genre={key.genre}
            director={key.director}
            rating={key.rating}
            cast={key.cast}
            />)}
         
      </section>
   )
}


export default MovieList;





