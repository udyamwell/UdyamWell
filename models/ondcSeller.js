const mongoose = require("mongoose");

const ondcSellerSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    phoneNum : {
        type : Number,
    },
    eName : {
        type : String,
        required : true,
    },
    businessAdd : {
        type : String,
        minlength : [5, "Please, enter a valid address !"],
    },
    businessInvolved : {
        type : String,
    }
})

const ONDCSeller = mongoose.model("Ondcseller",ondcSellerSchema);

module.exports = ONDCSeller;