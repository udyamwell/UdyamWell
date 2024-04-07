const mongoose = require('mongoose');

const udyamsathiSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phoneNum : {
        type : Number,
        required : true
    },
    willingnes : {
        type : String
    },
    awareness : {
        type : String
    },
    suggestion : {
        type : String
    }
})

const Udyamsathi = mongoose.model("Udyamsathi",udyamsathiSchema);

module.exports = Udyamsathi;