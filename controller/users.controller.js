//const jwt = require('jsonwebtoken') 
const Users = require('../models/users.models')

const getUsers = async (req,res) =>{
    const users = await Users.find()
    return res.send(users)

}

const addUser = async (req,res) =>{
    const user = new Users(req.body)
    console.log(user)
    try{
        await user.save()
        console.log(user)
    }catch(e){
        res.status(400).send(e)
    }

    // const {name, age, weight, height, password, email}  = req.body

    // const newUser = new Users({
    //     name: name,
    //     age: age,
    //     weight: weight,
    //     height: height,
    //     password: password,
    //     email: email
    // })
    // console.log(newUser)
    // newUser.save((err) => {
    //     if (err) return res.status(400).send({"error": err})
    //     return res.status(200).send({"success": newUser})
    // });
}

const updateMeStudent = async (req,res) =>{
    const updates = Object.keys(req.body)
    const allowedUpdate = ["id", "name", "age", "email","password", "subjects"]
    const isValidOperation = updates.every((update) => allowedUpdate.includes(update))
    if(!isValidOperation) {
        return res.status(400).send({error: 'Updates most only be regarding credit amount'})
    }
    try{
        updates.forEach((update) => req.student[update] = req.body[update])
        console.log("netta")
        await req.student.save()
        res.send(req.student)
    }
    catch(e){
        res.status(500).send(e)
    }
}

const deleteMeStudent = async (req,res) =>{
    try{
        await req.student.remove()
        res.send(req.student)
    }
    catch(e){
        res.status(500).send()
    }
}



module.exports = {
    addUser,
    getUsers,
    updateMeStudent,
    deleteMeStudent
}