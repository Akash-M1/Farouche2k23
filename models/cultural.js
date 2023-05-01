const mongoose = require('mongoose');

const culturalSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    team:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        required:true
    },
    team_size:{
        type:String,
        required:true
    }
});

module.exports =  mongoose.model('Cultural',culturalSchema,'cultural');