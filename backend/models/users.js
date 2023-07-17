const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNum:{
        type:Number,
        required:true,
    },
    location:{
        type:String,
        required:true
    },
    eName:{
        type:String,
        required:true,
    },
    enterpriseType:{
        type:String,
        required:true,
        enum:["individual","SHG","FPO","Pvt","OPC","LLP"]
    },
    socials:{
        type:String,
        required:true,
        enum:["Whatsapp","socailMedia","udyamwell","wordOfMouth"]
    },
    comment:{
         type:String,
    },
    password:{
            type:String
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
    
},{
    timestamp:true
})


// TO HASH THE PASSWORD 

userschema.pre('save', async function (next) {
    if (this.isModified('password')) {
        try {
            this.password = await bcrypt.hash(this.password, 12);
            // this.cpassword = await bcrypt.hash(this.password, 12); // You might not need this line.
        } catch (err) {
            return next(err);
        }
    }
    next();
});


// we are generating token

userschema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id: this._id}, process.env.SECRET_KEY);

        this.tokens = this.tokens.concat({token:token});
        // console.log("JWT " ,token );
        await this.save();
        return token;
    }catch(err){
        console.log('err',err);
    }
}



const Users= mongoose.model('Users',userschema);

module.exports = Users;



