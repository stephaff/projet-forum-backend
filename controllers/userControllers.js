const User = require('../models/userModel')

const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn : '3d'})
}

//connexion
const userLogin = async(req, res) => {
    const { email, password } = await req.body

    try {
        const user = await User.login(email, password)   

        const token = createToken(user._id)

        res.status(200).json({ email, token })  
    } catch (error) {
        res.status(400).json({ error : error.message })
    }
}

//inscription
const userSignUp = async(req, res) => {

    const { email, password } = await req.body

    try {
        const user = await User.signUp(email, password)   

        const token = createToken(user._id)
        res.status(200).json({ email, token })  
    } catch (error) {
        res.status(400).json({ error : error.message })
    }
}

module.exports = { userLogin, userSignUp }
