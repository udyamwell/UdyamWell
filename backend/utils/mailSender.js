const nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = async (email, otp) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.Email,
        pass: process.env.Email_Password,
      },
    });

    let info = await transporter.sendMail({
      from: "udyamwell@gmail.com",
      to: email,
      subject: "Email Verification",
      html:
        "<p>Hii " +
        ', Please click here to <a href="http://localhost:3000/register?otp=' +
        otp +
        '">Verify </a? Your mail. </p>',
    });
    console.log(info);
    return info;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = mailSender;
