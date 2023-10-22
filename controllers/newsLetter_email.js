const Email = require("../models/email");

const newsLetter = (req,res) => {
    const { email } = req.body;

    Email.find({ email })
    .then((response) => {
        if(response.length > 0){
            res.status(200).json({email});
        }
        else{
            const newEmail = new Email({ email });

            newEmail.save()
            .then(() => res.status(200).json({ email }))
            .catch((err) => res.status(400).json({ err }))
        }
    })
    .catch(err => console.log(err))

    
}

module.exports = newsLetter;