const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionModel = new Schema({
    title : {
        type : String,
        required : true
    },
    contenu : {
        type : String,
        required : true
    },
    categorie : {
        type : String,
        required : true
    }
}, { timestamps : true })

module.exports = mongoose.model('Question', questionModel)