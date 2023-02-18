const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // connect with the smtp
  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "xyz123XYZ",
      pass: "123654789",
    },
  });

  let info = await transporter.sendMail({
    from: '"Chitresh" <chitresh@inzint.com>', // sender address
    to: "shivam@inzint.com", // list of receivers
    subject: "Hello friends", // Subject line
    text: "Welcome to our organisation", // plain text body
    html: "<b>Congrotulation</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
};

module.exports = sendMail;
