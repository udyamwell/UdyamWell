const ONDCSeller = require("../models/ondcSeller");

module.exports.addSellers = async (req, res) => {
  const { name, email, phoneNum, eName, businessAdd, businessInvolved } = req.body;

  try {
    const existingSeller = await ONDCSeller.findOne({ email });
    if (existingSeller) {
      return res.status(200).json({ message: "Seller already exist !" });
    }
    const newSeller = new ONDCSeller({
      name,
      email,
      phoneNum,
      eName,
      businessAdd,
      businessInvolved,
    });

    newSeller
      .save()
      .then((response) => {
        res.status(201).json(response);
      })
      .catch((err) => {
        res.status(500).json({ error: "Internal Server Error !" });
      });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error !" });
  }
};

module.exports.getSellers = async (req, res) => {

  try {
    const sellers = await ONDCSeller.find();

    if (!sellers) {
      return res.status(200).json({ message: "Empty" });
    }
    res.status(200).json(sellers);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error !" });
  }
};
