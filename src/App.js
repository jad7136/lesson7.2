import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from "./movie.js";
import './movie.css';

function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('/movies.json') 
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error('Error fetching movie data:', error));
    }, []);

    const handleDelete = (id) => {
        setMovies(movies.filter(movie => movie.id !== id));
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
