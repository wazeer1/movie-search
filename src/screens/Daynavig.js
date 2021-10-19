import Play from '../assets/play.svg'
import './daynavig.css'
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Mon from './day/Mon'
import Tue from './day/Tue'
import Wed from './day/Wed'
import Thu from './day/Thu'
import Fri from './day/Fri'
import Sat from './day/Sat'
import Sun from './day/Sun'

function Daynavig() {
    const [mon, setMon] = useState([{
        "Title": "RED",
        "Year": "2010",
        "imdbID": "tt1245526",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzg2Mjg1OTk0NF5BMl5BanBnXkFtZTcwMjQ4MTA3Mw@@._V1_SX300.jpg"
    },
    {
        "Title": "Red Dragon",
        "Year": "2002",
        "imdbID": "tt0289765",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ4MDgzNjM5MF5BMl5BanBnXkFtZTYwMjUwMzY2._V1_SX300.jpg"
    },
    {
        "Title": "The Hunt for Red October",
        "Year": "1990",
        "imdbID": "tt0099810",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZDdkODg3YzctMGVmZS00ZDM5LWIzNTctZDRlMjA5Mjc4MGViXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
    },
    {
        "Title": "The Thin Red Line",
        "Year": "1998",
        "imdbID": "tt0120863",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjEzMTM2NjAtNWFmZC00MTVlLTgyMmQtMGQyNTFjZDk5N2NmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg"
    },
    {
        "Title": "Red Sparrow",
        "Year": "2018",
        "imdbID": "tt2873282",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_SX300.jpg"
    },
    {
        "Title": "RED 2",
        "Year": "2013",
        "imdbID": "tt1821694",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjI2ODQ4ODY3Nl5BMl5BanBnXkFtZTcwNTc2NzE1OQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Red Eye",
        "Year": "2005",
        "imdbID": "tt0421239",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzAxNjc1ODczOF5BMl5BanBnXkFtZTcwMjE3MjEzMw@@._V1_SX300.jpg"
    },
    {
        "Title": "Red Riding Hood",
        "Year": "2011",
        "imdbID": "tt1486185",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTc4NjYyMzQ5MV5BMl5BanBnXkFtZTcwNjE5Mjc3NA@@._V1_SX300.jpg"
    },
    {
        "Title": "Red Dawn",
        "Year": "2012",
        "imdbID": "tt1234719",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjI0MDAwMzA1M15BMl5BanBnXkFtZTcwNzIxMjY3OA@@._V1_SX300.jpg"
    },
    {
        "Title": "Red Heat",
        "Year": "1988",
        "imdbID": "tt0095963",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDkwMTJlMGMtMGJmMy00Mjg2LWEwOWEtZTAxNzQxMmVjYzVkXkEyXkFqcGdeQXVyNjc2NDI1ODA@._V1_SX300.jpg"
    }])
    const [tue, setTue] = useState([{
        "Title": "The Lego Movie",
        "Year": "2014",
        "imdbID": "tt1490017",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg"
    },
    {
        "Title": "The Simpsons Movie",
        "Year": "2007",
        "imdbID": "tt0462538",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTgxMDczMTA5N15BMl5BanBnXkFtZTcwMzk1MzMzMw@@._V1_SX300.jpg"
    },
    {
        "Title": "Scary Movie",
        "Year": "2000",
        "imdbID": "tt0175142",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
        "Title": "El Camino: A Breaking Bad Movie",
        "Year": "2019",
        "imdbID": "tt9243946",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjk4MzVlM2UtZGM0ZC00M2M1LThkMWEtZjUyN2U2ZTc0NmM5XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg"
    },
    {
        "Title": "Scary Movie 2",
        "Year": "2001",
        "imdbID": "tt0257106",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzQxYjU1OTUtYjRiOC00NDg2LWI4MWUtZGU5YzdkYTcwNTBlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
        "Title": "Bee Movie",
        "Year": "2007",
        "imdbID": "tt0389790",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjE1MDYxOTA4MF5BMl5BanBnXkFtZTcwMDE0MDUzMw@@._V1_SX300.jpg"
    },
    {
        "Title": "Scary Movie 3",
        "Year": "2003",
        "imdbID": "tt0306047",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDE2NTIyMjg2OF5BMl5BanBnXkFtZTYwNDEyMTg3._V1_SX300.jpg"
    },
    {
        "Title": "The Lego Batman Movie",
        "Year": "2017",
        "imdbID": "tt4116284",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
    },
    {
        "Title": "Scary Movie 4",
        "Year": "2006",
        "imdbID": "tt0362120",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZmFkMzc2NTctN2U1Ni00MzE5LWJmMzMtYWQ4NjQyY2MzYmM1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
    },
    {
        "Title": "Epic Movie",
        "Year": "2007",
        "imdbID": "tt0799949",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTA3NDM5ODU3NzleQTJeQWpwZ15BbWU3MDgyMjgyNDE@._V1_SX300.jpg"
    }])
    const [wed, setWed] = useState([ {
        "Title": "Crazy, Stupid, Love.",
        "Year": "2011",
        "imdbID": "tt1570728",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
        "Year": "1964",
        "imdbID": "tt0057012",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
        "Title": "Love Actually",
        "Year": "2003",
        "imdbID": "tt0314331",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_SX300.jpg"
    },
    {
        "Title": "Shakespeare in Love",
        "Year": "1998",
        "imdbID": "tt0138097",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BM2ZkNjM5MjEtNTBlMC00OTI5LTgyYmEtZDljMzNmNzhiNzY0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"
    },
    {
        "Title": "P.S. I Love You",
        "Year": "2007",
        "imdbID": "tt0431308",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNTg2MDg4MjI5NV5BMl5BanBnXkFtZTcwMzQ0MDczMw@@._V1_SX300.jpg"
    },
    {
        "Title": "I Love You, Man",
        "Year": "2009",
        "imdbID": "tt1155056",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTU4MjI5NTEyNV5BMl5BanBnXkFtZTcwNjQ1NTMzMg@@._V1_SX300.jpg"
    },
    {
        "Title": "Love & Other Drugs",
        "Year": "2010",
        "imdbID": "tt0758752",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTgxOTczODEyMF5BMl5BanBnXkFtZTcwMDc0NDY4Mw@@._V1_SX300.jpg"
    },
    {
        "Title": "Punch-Drunk Love",
        "Year": "2002",
        "imdbID": "tt0272338",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYmE1OTY4NjgtYjcwNC00NWE4LWJiNGMtZmVhYTdlMWE1YzIxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    },
    {
        "Title": "Love, Rosie",
        "Year": "2014",
        "imdbID": "tt1638002",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTk0Mzg1MTU1MF5BMl5BanBnXkFtZTgwMjU3ODI2MzE@._V1_SX300.jpg"
    },
    {
        "Title": "From Russia with Love",
        "Year": "1963",
        "imdbID": "tt0057076",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjBiNGNlNmItZTk2Zi00YjRlLTk1NzEtNDI2YTNmN2EwNDhlXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg"
    }])
    return (
        <div className="daynav">
           <div className="wrapper">
           <Router>
                <ul>
                    <li><Link to="/mon" className="link-text">MON</Link></li>
                    <li><Link to="/tue" className="link-text">TUE</Link></li>
                    <li><Link to="/wed" className="link-text">WED</Link></li>
                    <li><Link to="/thu" className="link-text">THU</Link></li>
                    <li><Link to="/fri" className="link-text">FRI</Link></li>
                    <li><Link to="/sat" className="link-text">SAT</Link></li>
                    <li><Link to="/sun" className="link-text">SUN</Link></li>
                </ul>
                <Switch>
                    <Route path="/mon">
                    <Mon mon={mon}/>
                </Route>
                    <Route path="/tue">
                    <Tue tue={tue}/>
                </Route>
                
                <Route path="/wed">
                    <Wed wed={wed}/>
                </Route>
                <Route path="/thu">
                    <Thu />
                </Route>
                <Route path="/fri">
                    <Fri />
                </Route>
                <Route path="/sat">
                    <Sat />
                </Route>
                <Route path="/sun">
                    <Sun />
                </Route>
                </Switch>
                </Router>
           </div>
        </div>
    )
}

export default Daynavig
