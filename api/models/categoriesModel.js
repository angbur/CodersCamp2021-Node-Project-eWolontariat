const mongoose = require('mongoose');


const categoriesSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
    unique:true},
    color: {
        type: String
    }, 
    icon:{
        type: String
    }  
})

module.exports = mongoose.model('Category', categoriesSchema)

