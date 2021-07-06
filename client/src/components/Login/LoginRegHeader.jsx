import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

import "./style/style.css"

export default function LoginRegHeader() {
    const [token] = useState(localStorage.getItem("token"));
    const history = useHistory();

    const SignOut = async () =>{
        try{
            localStorage.removeItem("token", token)
            history.push(`/`).go(0);
            //history.push(`/`)
        }catch(e){
            console.log(e)
        }
    }

    return (
        <div className="headerLink LoginRegister">
            {!token && <Link to="/login" className="home-link"><li className="header-link">Login</li></Link>}
            {!token && <Link to="/register" className="home-link"><li className="header-link">Register</li></Link>}
            
            {token && <button className="header-link logout-btn" onClick={SignOut}>Logout</button>} 
            {/* {token && <li className="header-link">Logout</li>}  */}
        </div>
    )
}
