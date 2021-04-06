const mongoose = require('mongoose');
const Schema = mongoose.Schema

const BookShema = new Schema({
    name:{
        type: String
    },
    type: {
        type: String
    },
    authorId:{
        type: String
    }
})

module.exports = mongoose.model('book', BookShema)