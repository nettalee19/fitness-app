import React, { useState } from 'react'
import api from '../ApiSource/api'
import './style/style.css'

export default function Register() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const signUp = async (e) => {
		e.preventDefault();
		try {
			const { data } = await api.post("/users/", {
                name,
                age,
                height,
                weight,
                email,
				password,
			});
			localStorage.setItem("token", data.token);
            //console.log(data.token)
            //console.log(data.teacher.name)
            console.log(data)
            //history.push('/')
            } catch (e) {
                console.log(e)
            }
	};
  
    return (
        <div className="register-form">
            this is register

            <p>name: 
            <input type="name" onChange={(e) => setName(e.target.value)}/></p>
            <p>age: 
            <input type="number" onChange={(e) => setAge(e.target.value)}/></p>
            <p>height: 
            <input type="number" onChange={(e) => setHeight(e.target.value)}/></p>
            <p>weight: 
            <input type="number" onChange={(e) => setWeight(e.target.value)}/></p>
            <p>email: 
            <input type="email" onChange={(e) => setEmail(e.target.value)}/></p>
            <p>password: 
            <input type="password" onChange={(e) => setPassword(e.target.value)}/></p>
            
            <button onClick={signUp}>Sign up</button>
        </div>
    )
}
