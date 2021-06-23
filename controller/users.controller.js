//const jwt = require('jsonwebtoken') 
const Users = require('../models/users.models')

const getUsers = async (req,res) =>{
    const users = await Users.find()
    return res.send(users)

}

const addUser = async (req,res) =>{
    // console.log(req)
    const user = new Users(req.body)
    try{
        await user.save()
        console.log(user)
        res.status(201).send({ user})
    }catch(e){
        res.status(400).send(e)
    }
}

const updateUser = async (req,res) =>{
    const updates = Object.keys(req.body)
    const allowedUpdate = ["name", "age", "weight","height", "email","password"]
    const isValidOperation = updates.every((update) => allowedUpdate.includes(update))
    if(!isValidOperation) {
        return res.status(400).send({error: 'Updates most only be regarding credit amount'})
    }
    try{
        updates.forEach((update) => req.user[update] = req.body[update])
        console.log("netta")
        await req.user.save()
        res.send(req.user)
    }
    catch(e){
        res.status(500).send(e)
    }
}

const deleteUser = async (req,res) =>{
    try{
        await req.user.remove()
        res.send(req.user)
    }
    catch(e){
        res.status(500).send()
    }
}



module.exports = {
    addUser,
    getUsers,
    updateUser,
    deleteUser
}