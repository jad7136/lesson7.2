import React from 'react';
import './movie.css';

const Movie = ({ movie, onDelete }) => {
    const handleDeleteClick = () => {
        onDelete(movie.title);
    };

    return (
        <div className="Movie">
            <button className="btn btn-primary delete-btn" onClick={handleDeleteClick}>Delete</button>
            <div className="movie-info">
                <h2>{movie.title}</h2>
                <h4>Director: {movie.director}</h4>
                <p>Stars: {movie.stars}</p>
            </div>
        </div>
    );
};


export default Movie;
