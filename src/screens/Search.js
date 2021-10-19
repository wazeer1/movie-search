
import React, {useState} from 'react';
import "./search.css"
const api={
    key:"421f9411",
    base:" http://www.omdbapi.com/?i=tt3896198&apikey=421f9411"
  }
function Search() {
  const [query,setQuery]=useState('')
  const [data,setData]=useState([]);
    const search=evt=>{
      
        if(evt.key==="Enter"){evt.preventDefault();
          fetch(`http://www.omdbapi.com/?s=${query}&apikey=421f9411`)
          .then(res=>res.json())
          .then(result=>{
            setQuery('')
            setData(result.Search); 
            console.log(data) 
            })
           
        }
      }
      let  korange=()=>(
        data.map((item)=>{
          console.log(item.Title);
          return (
            <div className="full">
              <div className="results">
                <div className="imageres">
                  <img src={item.Poster} alt="image"/>
                </div>
                <div className="detail">
                  <h1>Movie : {item.Title}</h1>
                  <h2>Year :{item.Year}</h2>
                </div>
              </div>
            </div>
          )
        })
      )
      
    return (
        <div className="search">
          <div className="wrapper">
            <form action="search">
                <input type="text" placeholder="search your movies" onChange={e=> setQuery(e.target.value)} value={query} onKeyPress={search}></input>
                {/* <button type="submit" value="Search">Search</button> */}
            </form>
            <div className="rewrapper">
              {korange()}
            </div>
          </div>
        </div>
    )
}

export default Search
