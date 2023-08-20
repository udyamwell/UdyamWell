const dotenv = require('dotenv');
dotenv.config({path:'./config.env'})
const express = require('express');
const port = 9000;
const cors = require('cors');
const path = require('path');
// adding monggose 
const errorHandler = require('./config/errorHandler')
const db = require('./config/mongoose').connect();

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
  AllowedOrigins: "*"
}));     // communicate with ui and backend 
// use express router 
app.use('/',require('./routes'));
app.use(errorHandler);
app.set('view engine', 'ejs');
app.set('views','./views');
// app.use('/uploads',express.static('./uploads'));
app.use('/uploads',express.static(__dirname +'/uploads'))
app.use(express.static('./frontend/build'));

// app.post('/register',(req,res)=>{
//     res.send("I am live");
// });


app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
})


app.listen(port,(err)=>{
    if(err){
        console.log(`Error: ${err}`);
        return;
    }
    console.log(`Server is running at port: ${port}`);
});
