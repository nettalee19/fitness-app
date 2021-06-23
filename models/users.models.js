const mongoose = require('mongoose')
//const bcrypt = require('bcryptjs')
//const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: false
    },
    age:{
        type: Number,
        required: true,
        default: 0,
        unique: false
    },
    weight:{
        type: Number,
        required: true,
        default: 0,
        unique: false
    },
    height:{
        type: Number,
        required: true,
        default: 0,
        unique: false
    },
    gender:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true
    },
})

const Users = mongoose.model('users', UserSchema)

module.exports= Users;