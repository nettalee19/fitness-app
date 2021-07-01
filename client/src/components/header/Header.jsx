import React from 'react'
import { Link } from 'react-router-dom';

import './Style/style.css'

export default function Header() {
    
    return (
        <div className="above-header">
        <div className="header">
            <ul className="headerLink">
                <li><Link to="/">Homepage</Link></li>
            </ul>
            <ul className="headerLink LoginRegister">
                <li><Link to="/myNewActivity">New Activity</Link></li>
                <li><Link to="/myPage">My Page</Link></li>
                <li><Link to="/myHistoryPage">Activties' History</Link></li>
            </ul>
            <ul className="headerLink LoginRegister">
                <li>Login</li>
                <li>Register</li>
            </ul>
        </div>

        </div>
    )
}
