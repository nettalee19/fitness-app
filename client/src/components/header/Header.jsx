import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import LoginRegHeader from '../Login/LoginRegHeader';
import MystuffHeader from './MystuffHeader';

import './Style/style.css'

export default function Header() {
    const [token] = useState(localStorage.getItem("token"));

    return (
        <div className="above-header ">
            <div className="header ">
                <ul >
                    <Link to="/" className="home-link"><li className="header-link">Homepage</li></Link>
                </ul>
                <ul className="headerLink LoginRegister">
                    {token && <MystuffHeader/>}
                    {/* <Link to="/myNewActivity" className="home-link"><li className="header-link">New Activity</li></Link>
                    <Link to="/myPage" className="home-link"><li className="header-link">My Page</li></Link>
                    <Link to="/myHistoryPage" className="home-link"><li className="header-link">History</li></Link> */}
                </ul>
                <ul className="headerLink LoginRegister">
                    <LoginRegHeader/>
                    {/* <Link to="/login" className="home-link"><li className="header-link">Login</li></Link>
                    <Link to="/register" className="home-link"><li className="header-link">Register</li></Link> */}
                </ul>
            </div>

        </div>
    )
}
