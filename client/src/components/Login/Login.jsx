import React , { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import api from '../ApiSource/api'

export default function Login() {
    const [email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')

    const history = useHistory();
    
    const login = async (e) => {
        e.preventDefault();

        try{
            const { data } = await api.post("/users/login", {
                email,
                password,
            })
            localStorage.setItem("token", data.token)
            //history.go(0);
            history.push(`/`).go(0)
            console.log(data.token)
            console.log(data.user.name)
            console.log(data.user.age)

        }catch(e){
            console.log(e)
        }
    }

    return (
        <div className="login-form">
            <h2>Login</h2>
            <p>email: 
            <input type="email" onChange={(e) => setEmail(e.target.value)}/></p>
            <p>password:
            <input type="password" onChange={(e) => setPassword(e.target.value)}/></p>
            
            <button onClick={login}>Login</button> <br />
            Already a member?<button><Link to="/register">Register</Link></button>

        </div>
    )
}
