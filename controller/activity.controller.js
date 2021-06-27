//const jwt = require('jsonwebtoken') 
const Activities = require('../models/activity.models')

const getActivities = async (req,res) =>{
    try{
        // const activities = await Activities.find({ owner: req.user._id})
        await req.user.populate('activities').execPopulate('')
        res.send(req.user.activities)
        // res.send(activities)

    }catch(e){
        res.status(500).send()
    }

}

const addActivity = async (req,res) =>{
    // console.log(req)
    //const activity = new Activities(req.body)
    const activity = new Activities({
        ...req.body,
        owner: req.user._id
    })


    try{
        await activity.save()
        res.status(201).send({ activity })
    }catch(e){
        res.status(400).send(e)
    }
}

const updateActivity = async (req,res) =>{
    const updates = Object.keys(req.body)
    const allowedUpdate = ["name", "duration", "date","calories"]
    const isValidOperation = updates.every((update) => allowedUpdate.includes(update))
    
    if(!isValidOperation) {
        return res.status(400).send({error: 'Updates most only be regarding credit amount'})
    }

    try{
        //const activity = await Activities.findById(req.params.id)
        const activity = await Activities.findOne({ _id: req.params.id, owner:req.user._id})

        if(!activity){
            return res.status(404).send()
        }
        updates.forEach((update) => activity[update] = req.body[update])
        await activity.save()
        res.send(activity)

        // updates.forEach((update) => req.activity[update] = req.body[update])
        // console.log("netta")
        // await req.user.save()
        // res.send(req.user)
    }
    catch(e){
        res.status(400).send(e)
    }
}

// const deleteActivity = async (req,res) =>{
//     try{
//         await req.user.remove()
//         res.send(req.user)
//     }
//     catch(e){
//         res.status(500).send()
//     }
// }



module.exports = {
    addActivity,
    getActivities,
    updateActivity,
    //deleteActivity
}