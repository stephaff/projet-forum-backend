const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bcrypt = require('bcrypt')

const userModel = Schema({
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

userModel.statics.signUp = async function(email, password){

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

module.exports = mongoose.model('User', userModel)