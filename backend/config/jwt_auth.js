const jwt = require('jsonwebtoken');
const User = require('../models/users');

const Authenticate = async (req,res,next)=>{
    try{
        const token = req.cookie.jwttoken;
        const verifyToken = jwt.verify(token,process.env.SECRET_KEY);

        const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token});

        if(!rootUser){
            console.log("User not found");

            req.token = token;
            req.rootUser = rootUser;
            req.userId = rootUser._id;

            next();
        }
    }catch(err){
        console.log("Plese sign in ");
        return res.status(401).send("Unauthorized: No token provided");
    }
}

module.exports = Authenticate ;