import React from 'react';
import './movie.css';

const Movie = ({ movie, onDelete }) => {
    return (
        <div className="Movie">
            <div className="movie-info">
                <button className="delete-btn" onClick={onDelete}>Delete</button>
                <h2>{movie.movieName}</h2>
            </div>
            <h4>Director: {movie.directorName}</h4>
            <p>Stars: {movie.stars}</p>
        </div>
    );
};

export default Movie;
