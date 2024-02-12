const express = require("express");
const router = express.Router();
const User = require("../models/UserLogin");
const nodemailer = require("nodemailer");
const Nexmo = require('nexmo');

const generateOTP = () => {
    const OTP_LENGTH = 6; // Length of OTP
    return Math.floor(100000 + Math.random() * 900000);
};

router.post("/register", async (req, res) => {
    const { name, email, city, mobile } = req.body;

    let user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const OTP = generateOTP();

    user = await User.create({
        name,
        email,
        city,
        mobile,
        OTP,
    });
  
    // Save OTP in database or memory for verification later
  
    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "sendemail260@gmail.com", // Email address for sending OTP
            pass: "cdaqzlbztdwoadai", // Email password
        },
    });
  
    // Set email options
    const mailOptions = {
        from: "sendemail260@gmail.com",
        to: email,
        subject: 'One-Time Password (OTP)',
        text: `Your OTP is: ${OTP}`,
    };
  
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).json({ message: 'Failed to send OTP' });
        } else {
            console.log('OTP sent:', info.response);
            res.status(200).json({ message: 'OTP sent successfully' });
        }
    });
});

router.post('/login', (req, res) => {
    const { mobileNumber } = req.body;
  
    // Generate OTP
    const otp = Math.floor(1000 + Math.random() * 9000);
  
    // Send OTP via SMS using Nexmo
    const nexmo = new Nexmo({
      apiKey: 'd928dbb7',
      apiSecret: '3Vn1LCrK0lo4KKYv',
    });
  
    const from = '77758979567';
    const to = mobileNumber;
    const text = `Your OTP is: ${otp}`;
  
    nexmo.message.sendSms(from, to, text, (err, responseData) => {
      if (err) {
        console.log('Error sending OTP:', err);
        res.status(500).json({ success: false, message: err });
      } else {
        console.log('OTP sent successfully');
        res.json({ success: true, otp });
      }
    });
  });

module.exports = router;
