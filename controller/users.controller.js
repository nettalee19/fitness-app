const jwt = require('jsonwebtoken') 
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
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token})
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
        //const user = await Users.findById(req.params.id)

        // updates.forEach((update) => user[update] = req.body[update])

        // await user.save()

        // if(!user){
        //     return res.status(404).send()
        // }
        // res.send(user)
        
        updates.forEach((update) => req.user[update] = req.body[update])
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
        //const user = await Users.findByIdAndDelete(req.user._id)
        
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
