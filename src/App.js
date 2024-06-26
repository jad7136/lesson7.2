import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from "./movie.js";
import movieList from './movies.json';

function App() {
    const [movies, setMovies] = useState(movieList);

    const handleDelete = (id) => {
        setMovies(movies.filter(movie => movie.id !== id));
    };

    return (
        <div className="app">
            <h1>List of Movies</h1>
            <div className="Movies row row-cols-sm-1 row-cols-lg-3">
                {movies.map(movie => (
                    <Movie key={movie.id} movie={movie} onDelete={() => handleDelete(movie.id)} />
                ))}
            </div>
        </div>
    );
}

export default App;
