const mongoose = require('mongoose');

const eventUpdatesSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('EventUpdates',eventUpdatesSchema,"eventupdates");