import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from "./movie.js"
import React from 'react';
import './movie.css';
//This uses 3 movies components in App
function App() {
  return (
    <div className="App"> 
      <h1>List of Movies</h1>
      <div className= "movies row">
        <div className='col-lg-4  col-md-6 col-sm-12'>
        <Movie/>
        </div>
        </div>
        <div className='col-lg-4  col-md-6 col-sm-12'>
        <Movie/>
      </div>
      <div className='col-lg-4  col-md-6 col-sm-12'>
          <Movie/>
        </div>
      </div>
  );
}
export default App;