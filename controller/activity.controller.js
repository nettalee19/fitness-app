//const jwt = require('jsonwebtoken') 
const Activities = require('../models/activity.models')

const getActivities = async (req,res) =>{
    const activities = await Activities.find()
    return res.send(activities)

}

const addActivity = async (req,res) =>{
    // console.log(req)
    const activity = new Activities(req.body)
    try{
        await activity.save()
        console.log(activity)
        res.status(201).send({ activity })
    }catch(e){
        res.status(400).send(e)
    }
}

const updateActivity = async (req,res) =>{
    // const updates = Object.keys(req.body)
    // const allowedUpdate = ["name", "age", "weight","height", "email","password"]
    // const isValidOperation = updates.every((update) => allowedUpdate.includes(update))
    // if(!isValidOperation) {
    //     return res.status(400).send({error: 'Updates most only be regarding credit amount'})
    // }
    try{
        updates.forEach((update) => req.activity[update] = req.body[update])
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
    addActivity,
    getActivities,
    updateActivity,
    deleteUser
}