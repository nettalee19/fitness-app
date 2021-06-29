const mongoose = require('mongoose')
//const bcrypt = require('bcryptjs')
//const jwt = require('jsonwebtoken')

const ActivitySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: false
    },
    duration:{
        type: Number,
        required: true,
        default: 0,
        unique: false
    },
    date:{
        type: Number,
        required: true,
        default: 0,
        unique: false
    },
    calories:{
        type: Number,
        required: true,
        default: 0,
        unique: false
    }
    
})

const Activities = mongoose.model('activities', ActivitySchema)

module.exports= Activities;