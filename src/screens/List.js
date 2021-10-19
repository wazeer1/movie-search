import React from 'react'
import "./list.css"

const List = (props) =>  {
    return(
    <>
            {props.movies.map((movie, index)=> <div className="widjets justify-content-start m-3">
                <img src={movie.Poster} alt="movie"></img>
                <h4>{movie.Title}</h4>
                <span>{movie.Year}</span>
            </div>)}

    </>        
)
} 
export default List;   
