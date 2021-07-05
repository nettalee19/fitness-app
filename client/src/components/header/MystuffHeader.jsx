import React from 'react'
import { Link } from 'react-router-dom';
import './Style/style.css'

export default function MystuffHeader() {
    return (
        <div className="headerLink LoginRegister">
            <Link to="/myNewActivity" className="home-link"><li className="header-link">New Activity</li></Link>
            <Link to="/myPage" className="home-link"><li className="header-link">My Page</li></Link>
            <Link to="/myHistoryPage" className="home-link"><li className="header-link">History</li></Link>
        </div>
    )
}
