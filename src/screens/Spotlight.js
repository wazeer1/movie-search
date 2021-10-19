import React from 'react'
import Header from './Header'
import './spotlight.css'
import Play from '../assets/play.svg'
import Arrow from '../assets/arrowdwn.svg'
function Spotlight() {
    return (
        <div className="spotlight">
            <Header />
            <div className="container">
                <div className="wrapper">
                    <span>Action, adventure,Fantacy</span>
                    <h1>End Of The Fucking World</h1>
                    <p>Lorem ipsum tisium time is the previus version of the feutere of the creative education and some political back ground of historical evidence</p>
                    <div className="btm"><small>15</small><a className="button"><img src={Play}/>Play Trailer</a></div>
                </div>
            </div>
            <div className="arrow"><img src={Arrow}/></div>
        </div>
    )
}

export default Spotlight
