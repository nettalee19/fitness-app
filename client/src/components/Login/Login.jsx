import React , { useState } from 'react'
import api from '../ApiSource/api'

export default function Login() {
    const [email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')
    
    const login = async (e) => {
        e.preventDefault();

        try{

        }catch(e){
            console.log(e)
        }
    }

    return (
        <div>
            hi netta this is login
            <p>email: 
            <input type="email" /></p>
            <p>password: 
            <input type="password" /></p>
            
            <button onClick={login}>Sign in</button>

        </div>
    )
}
