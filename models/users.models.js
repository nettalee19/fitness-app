const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
//const jwt = require('jsonwebtoken')

//validator

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


UserSchema.pre('save', async function (next) {
    const user = this

    //console.log("just before saving")
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

const Users = mongoose.model('users', UserSchema)

module.exports= Users;