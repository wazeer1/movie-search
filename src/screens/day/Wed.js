import React, {useState} from 'react';
import "./mon.css"

const List = (props) =>  {
    return(
    <>
    <div className="full">
            {props.wed.map((wed, index)=>
             <div className="widjetsday">
                <div className="image__cnt">
                    <img src={wed.Poster} alt="movie"></img>
                </div>
                <div className="movie__details">
                    <span className="title">{wed.Type}:{wed.Title}</span><br />
                    <span>Year:{wed.Year}</span><br />
                    <small>imdb id:{wed.imdbID}</small>
                </div>
            </div>
            )}
    </div>

    </>        
)
} 
export default List; 
