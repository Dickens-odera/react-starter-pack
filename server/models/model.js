//create a schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contacts = new Schema({
    username:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    message:{
        type:String,
        required:true
    },
    collection:'project'

});

module.exports = mongoose.model("contacts",contacts);