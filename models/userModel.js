const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bcrypt = require('bcrypt')

const validator = require('validator')

const userSchema = Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        require : true
    }
})

userSchema.statics.signUp = async function(email, password){

    if(!email || !password){
        throw Error('veuillez remplir tous les champs')
    }

    if(!validator.isEmail(email)){
        throw Error('Email non valide')
    }

    if(!validator.isStrongPassword(password)){
        throw Error("Mot de passe non valide")
    }

    const exists = await this.findOne({ email })

    if(exists){
        throw Error("Email déja utilisé")
    }

    // const salt = await bcrypt.genSalt(10)
    // const hash = await bcrypt.hash(password, salt)

    // const user = await this.create({ email, password : hash })

    const user = await this.create({ email, password })

    return user
}

userSchema.statics.login = async function(email, password){

    if(!email || !password){
        throw Error('Veuillez remplir tous les champs')
    }

    const user = await this.findOne({ email })

    if(!user){
        throw Error('email incorrect')
    }

    // const match = await bcrypt.compare(password, user.password)

    // if(!match){
    //     throw Error('Mot de passe incorrect')
    // }

    if(password != user.password){
        throw Error('Mot de passe incorrect')
    }

    return user
}

module.exports = mongoose.model('User', userSchema)