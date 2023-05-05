const mongoose = require('mongoose');


const registerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    usn:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    hostel:{
        type:String,
        required:true
    },
    event:{
        type:String,
        required:true
    },
    team_size:{
        type:Number
    },
    team_members:{
        type:Array
    }
});


module.exports = mongoose.model("Register",registerSchema,'register');