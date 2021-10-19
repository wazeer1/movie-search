import React, {useState} from 'react';
import './new.css'
import New1 from '../assets/new1.jpg'
import New2 from '../assets/new2.jpg'
import New3 from '../assets/new3.jpg'
import New4 from '../assets/new4.jpg'
import Play from '../assets/play.svg'
import Slider from "react-slick";
import List from "./List"


function New() {
    const [movies, setMovies] = useState([{
        "Title": "Thor: The Dark World",
        "Year": "2013",
        "imdbID": "tt1981115",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SX300.jpg"
    },
    {
        "Title": "World War Z",
        "Year": "2013",
        "imdbID": "tt0816711",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    },
    {
        "Title": "Jurassic World",
        "Year": "2015",
        "imdbID": "tt0369610",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzQ3OTY4NjAtNzM5OS00N2ZhLWJlOWUtYzYwZjNmOWRiMzcyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    },
    {
        "Title": "Scott Pilgrim vs. the World",
        "Year": "2010",
        "imdbID": "tt0446029",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYWQ2OGIyZTgtZmY5MC00NzY3LTg5NDYtMjdkZjgxZmFhZTMzXkEyXkFqcGdeQXVyOTA3ODI3NDA@._V1_SX300.jpg"
    },
    {
        "Title": "The Lost World: Jurassic Park",
        "Year": "1997",
        "imdbID": "tt0119567",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDFlMmM4Y2QtNDg1ZS00MWVlLTlmODgtZDdhYjY5YjdhN2M0XkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg"
    },
    {
        "Title": "Jurassic World: Fallen Kingdom",
        "Year": "2018",
        "imdbID": "tt4881806",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzIxMjYwNDEwN15BMl5BanBnXkFtZTgwMzk5MDI3NTM@._V1_SX300.jpg"
    },
    {
        "Title": "Master and Commander: The Far Side of the World",
        "Year": "2003",
        "imdbID": "tt0311113",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjA5NjYyMDM5NV5BMl5BanBnXkFtZTYwOTU5MDY2._V1_SX300.jpg"
    },
    {
        "Title": "The World Is Not Enough",
        "Year": "1999",
        "imdbID": "tt0143145",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjA0MzUyNjg0MV5BMl5BanBnXkFtZTcwNDY5MDg0NA@@._V1_SX300.jpg"
    },
    {
        "Title": "Team America: World Police",
        "Year": "2004",
        "imdbID": "tt0372588",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTM2Nzc4NjYxMV5BMl5BanBnXkFtZTcwNTM1MTcyMQ@@._V1_SX300.jpg"
    },
    {
        "Title": "The End of the F***ing World",
        "Year": "2017–2019",
        "imdbID": "tt6257970",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BN2ZhNmQ2MjQtMmQzMi00YjE5LTlkMWMtMjk5YzIxMjk2NDc2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
    }])
    return (

    <><div className="top">
      <h4>NEW</h4>
  </div>
  <div className='container-fluid'>
    <div className="row">
      <List movies={movies}/>
    </div>
  </div>
  </>
    )}

export default New
