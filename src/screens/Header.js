import React from 'react'
import Logo from '../assets/logo.svg'
import './header.css'

function Header() {
    return (
        <div className="header">
            <div className="wrapper">
                <div className="left">
                    <img src={Logo} alt="image" />
                </div>
                <div className="right">
                    <ul>
                        <li>HOME</li>
                        <li>WHAT'S ON</li>
                        <li>SHORT CODES</li>
                        <li>NEWS</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
