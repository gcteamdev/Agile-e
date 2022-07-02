var mongoose = require('mongoose');
var schema = mongoose.Schema;
var userSchema = new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})

module.exports =mongoose.model('Registeruser', userSchema)