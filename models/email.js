const mongoose = require("mongoose");

const emailschema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
    }
})

const Email = mongoose.model("Emails", emailschema);

module.exports = Email;