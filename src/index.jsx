import React from 'react';
import { render } from 'react-dom';
import './style.scss';
import './movies.js';

import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';
import movies from './movies.js';



const App = () => (
  <>
    <Header />
    <MovieList movies={movies} />
  </>
);

render(<App />, document.querySelector('#app'));

