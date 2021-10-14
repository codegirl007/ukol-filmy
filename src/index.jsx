import React from 'react';
import { render } from 'react-dom';
import { Header } from './components/Header/Header';
import './style.css';
import { MovieList } from './components/MovieList/MovieList';
import { movies } from './movies';


const App = () => {

  return (
  <div className="container">
    <Header />
    <MovieList movies={movies} />
  </div>
  )
};

render(<App />, document.querySelector('#app'));
