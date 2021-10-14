import React from 'react';
import { Movie } from '../Movie/Movie';
import './MovieList.css'

export const MovieList = ({movies}) => {
    return (
    <div className="movieGrid">
     {movies.map(movie => {
         return <Movie 
         key={movie.id}
         poster={movie.poster}
         rating={movie.rating} 
         title={movie.title}
         year={movie.year}
         genre={movie.genre}
         director={movie.director}
         cast={movie.cast}
         />
     })}
    </div>
    )
}