const User = require('../models/userModel')

//connexion
const userLogin = (req, res) => {
    res.status(200).json({ msg : 'login' })
}

//inscription
const userSignUp = async(req, res) => {

    const { email, password } = await req.body

    try {
        const user = await User.signUp(email, password)   
        res.status(200).json({ email, user })  
    } catch (error) {
        res.status(400).json({ error : error.message })
    }
}

module.exports = { userLogin, userSignUp }
