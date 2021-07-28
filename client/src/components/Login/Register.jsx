import React, { useState } from 'react'
import api from '../ApiSource/api'
import './style/style.css'

export default function Register() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const registerFunc = async(e) =>{
        //console.log(e.target.value)
        e.preventDefault();

        try{
            const { data } = await api.post("/users/", {
                name,
                age,
                weight,
                height,
                gender,
                email,
                password
            })
            localStorage.setItem("token", data.token)
            console.log(data)

        }catch(e){
            console.log(e)
        }
    }
    return (
        <div className="register-form">

            <p>Name: <input type="text" onChange={(e) => setName(e.target.value)}/></p>
            <p>Age: <input type="number" onChange={(e) => setAge(e.target.value)}/></p>
            <p>Weight: <input type="number" onChange={(e) => setWeight(e.target.value)}/></p>
            <p>Height: <input type="number" onChange={(e) => setHeight(e.target.value)}/></p>
            
            {/* <p>Gender: <input type="text" onChange={(e) => setGender(e.target.value)}/></p> */}
            <p>Gender: 
            <input type="radio" id="male" name="gender" value="Male" onChange={(e) => setGender(e.target.value)}/>
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="Female" onChange={(e) => setGender(e.target.value)}/>
            <label for="female">Female</label>
            </p>

            <p>email: <input type="email" onChange={(e) => setEmail(e.target.value)}/></p>
            <p>password: <input type="password" onChange={(e) => setPassword(e.target.value)}/></p>

            <button onClick={registerFunc}>Register</button>
            
        </div>
    )
}
