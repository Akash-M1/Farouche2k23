const mongoose = require('mongoose');

const rolesSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("Roles",rolesSchema,"roles");