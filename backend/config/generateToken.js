const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");

dotenv.config();

const generateToken= (id)=>{
    return jwt.sign({id},process.env.SECRET_KEY,{
        expiresIn:"7d"
    });
}

module.exports = generateToken ;