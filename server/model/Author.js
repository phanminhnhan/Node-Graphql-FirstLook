const mongoose = require('mongoose');
const Schema = mongoose.Schema

const AuthorShema = new Schema({
    name:{
        type: String
    },
    age: {
        type: Number
    } 
})

module.exports = mongoose.model('author', AuthorShema)