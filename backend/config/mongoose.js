const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

main().catch(err=>console.log(err));

async function main (){
    await mongoose.connect("mongodb://127.0.0.1:27017/udyamwell_development");
}



// import dotenv from 'dotenv';
// import mongoose from "mongoose";

// dotenv.config();
// function Connect_db(){
// mongoose.connect(process.env.MONGO_URI,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then((res)=>console.log("Mongodb is connected"));
// }
// export default Connect_db;