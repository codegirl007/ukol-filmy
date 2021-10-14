import React from 'react';
import { Actor } from '../Actor/Actor';
import './Movie.css';

export const Movie = ({title, poster, year, rating, director, genre, cast}) => {
    
    return (
        <div className="movieCard">
          <p className="rating">{rating}/10</p>
          <img className="poster" src={`./assets/${poster}`} alt={`poster${poster}`} />
          <div className="wrapper">
                <h2 className="title">{title}</h2>
                <div className="info">
                    <span className="bold">Rok vydání: </span>{year}<br/>
                    <span className="bold">Žánr: </span>{genre} <br/>
                    <span className="bold">Režie: </span>{director}
                </div>
                <h5 className="casts">V hlavních rolích:</h5> 
                <div className="actors">          
                     {cast.map(actor=> <Actor key={actor.name} name={actor.name} as={actor.as}/> )}   
                </div>     
          </div>
        </div>

    )
}