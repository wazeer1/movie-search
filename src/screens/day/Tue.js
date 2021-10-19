import React, {useState} from 'react';
import "./mon.css"

const List = (props) =>  {
    return(
    <>
    <div className="full">
            {props.tue.map((tue, index)=>
             <div className="widjetsday">
                <div className="image__cnt">
                    <img src={tue.Poster} alt="movie"></img>
                </div>
                <div className="movie__details">
                    <span className="title">{tue.Type}:{tue.Title}</span><br />
                    <span>Year:{tue.Year}</span><br />
                    <small>imdb id:{tue.imdbID}</small>
                </div>
            </div>
            )}
    </div>

    </>        
)
} 
export default List; 