import React , { useState } from 'react'
import api from '../ApiSource/api'

export default function Login() {
    const [email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')
    
    const login = async (e) => {
        e.preventDefault();

        try{
            const { data } = await api.post("/users/login", {
                email,
                password,
            })
            localStorage.setItem("token", data.token)
            console.log(data.token)
            console.log(data.user.name)
            console.log(data.user.age)

        }catch(e){
            console.log(e)
        }
    }

    return (
        <div>
            hi netta this is login
            <p>email: 
            <input type="email" onChange={(e) => setEmail(e.target.value)}/></p>
            <p>password: 
            <input type="password" onChange={(e) => setPassword(e.target.value)}/></p>
            
            <button onClick={login}>Sign in</button>

        </div>
    )
}
