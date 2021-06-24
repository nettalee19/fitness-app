const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
    tokens:[{
        token:{
            type: String,
            required: true
        }
    }],
})


//token
UserSchema.methods.generateAuthToken = async function (){
    const user = this
    const token = jwt.sign({_id: user._id.toString()}, "user")
    
    user.tokens = user.tokens.concat({ token })
    await user.save()
    
    return token
}

//login
UserSchema.statics.findByCredentials = async(email, password) =>{
    const user = await Users.findOne({email: email})

    if(!user){
        throw new Error('Unable to login, no such user')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){
        throw new Error('Unable to login, wrong email or password')
    }

    return user
}


//password incript
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