import React, {useState} from 'react';
import "./mon.css"

const List = (props) =>  {
    return(
    <>
    <div className="full">
            {props.mon.map((mon, index)=>
             <div className="widjetsday">
                <div className="image__cnt">
                    <img src={mon.Poster} alt="movie"></img>
                </div>
                <div className="movie__details">
                    <span className="title">{mon.Type}:{mon.Title}</span><br />
                    <span>Year:{mon.Year}</span><br />
                    <small>imdb id:{mon.imdbID}</small>
                </div>
            </div>
            )}
    </div>

    </>        
)
} 
export default List; 