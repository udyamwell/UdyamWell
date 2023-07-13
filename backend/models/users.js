import mongoose from "mongoose";

const Users_schema = mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    userEmail:{
        type:String,
        required:true,
        unique:true
    },
    contact:{
        type:Number,
        required:true,
    },
    location:{
        type:String,
        required:true
    },
    enterpriseName:{
        type:String,
        required:true,
    },
    entrepreneurType:{
        type:String,
        required:true,
        enum:["Individual","SHG","Private limited","OPC","LLP"]
    },
    knowaboutUs:{
        type:String,
        required:true,
        enum:["Social Media","Word of Mouth","Whatsapp"]
    },
    comment:{
         type:String,
    }
})
const Users = new mongoose.model('User', Users_schema);

export default Users_model;
