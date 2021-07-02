const jwt = require('jsonwebtoken')
const users= require('../models/users.models')

const auth = async(req,res,next) =>{
    //console.log('auth middleware2')
    // next()
    try{
        const token = req.header('Authorization').replace('Bearer ','')
        // console.log(token)
        const decoded = jwt.verify(token, 'user') //token valid and not expired
        //should be the same as the value in Models
        const user = await users.findOne({ _id:  decoded._id, 'tokens.token': token}) //find user with an id to match the auth token
        if(!user){
            throw new Error()
        }

        req.token = token
        req.user = user
        next()
    } catch(e){
        res.status(401).send({ error: 'Please authenticate.' })
        //return res.status(401).send(e)
    }
}

module.exports = auth