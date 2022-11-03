require('dotenv').config({ path : './config/.env' })

const express = require('express')
const app = express()

const questionRoutes = require('./routes/question')
const userRoutes = require('./routes/user')

const mongoose = require('mongoose')

app.use(express.json())

//routes
app.use('/api/questions', questionRoutes)
app.use('/api/users', userRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(5000, () => {
            console.log(`serveur en marche sur le port ${ process.env.PORT }`)
        })
    })
    .catch( error => {
        console.log(error)
    })

