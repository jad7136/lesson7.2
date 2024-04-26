import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from "./movie.js";
import './movie.css';
import movieList from './movies.json';

function App() {
    const [movies, setMovies] = useState(movieList);
    const handleDelete = (title) => {
        setMovies(movies.filter(movie => movie.title !== title));
    };
    
    
    

    return (
        <div className="app">
            <div className="Movies row row-cols-sm-1 row-cols-lg-3">
                {movies.map(movie => (
                    <Movie key={movie.id} movie={movie} onDelete={() => handleDelete(movie.id)} />
                ))}
            </div>
        </div>
    );
}

export default App;
