const Udyamsathi = require("../models/udyamsathi");

module.exports.creatUdyamsathi = async (req,res) => {
    const { name, email, phoneNum, willingness, awareness, suggestion } = req.body;

    try {
        const existingUdyamsathi = await Udyasathi.findOne({ email });
        if(existingUdyamsathi){
            return res.status(200).json({ message: "You are already a Udyamsathi !" });
        }
        const newUdyamsathi = new Udyamsathi({
            name,
            email,
            phoneNum,
            willingness,
            awareness,
            suggestion
        })

        newUdyamsathi
            .save()
            .then((response)=>{
                res.status(201).json(response);
            })
            .catch(err=>{
                res.status(500).json({ error : "Internal Server Error !", error : err });
            })

    } catch (error) {
        res.status(500).json({ error : "Internal Server Error !" });
    }
}

module.exports.getUdyamsathi = async (req,res) => {
    try {
        const udyamsathi = await Udyamsathi.find();
        if(udyamsathi.length===0){
            return res.status(200).json({ message : "No udyamsathi registered yet !" });
        }
        res.status(200).json(udyamsathi);
    } catch (error) {
        res.status(500).json({ message : "Internal Server Error !" });
    }
}