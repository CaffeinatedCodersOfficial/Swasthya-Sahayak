import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import transporter from "../configs/nodemailer.config.js";
import { PendingUser } from "../models/pendingUser.model.js";

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.json({
        success: false,
        message: "Name, Email, Password and Role is required.",
      });
    }

    let user = await User.findOne({ email });
    if (user) {
      return res.json({ success: false, message: "User already exists." });
    }

    user = await PendingUser.findOne({ email });
    if (user) {
      return res.json({
        success: true,
        message: "Please enter OTP to verify.",
      });
    }

    const otp = generateOTP();
    const otpExpire = Date.now() + 5 * 60 * 1000;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new PendingUser({
      name,
      email,
      password: hashedPassword,
      role,
      otp,
      otpExpire,
    });

    await user.save();

    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: "Welcome to Swasthya Sahayak",
      text: `<div style="font-family:sans-serif;">
     <h2>Your OTP Code</h2>
     <p>Use this code to verify your account:</p>
     <h3 style="color:#0165fc;">${otp}</h3>
     <p>This code will expire in 10 minutes.</p>
   </div>`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Regsitration OTP sent on email." });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({
        success: false,
        message: "Email and Password is required.",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User is not registerd." });
    }

    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      return res.json({ success: false, message: "Invalid Password" });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({ success: true, message: "Login successfull." });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const verifyRegisterationOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res.json({
        success: false,
        message: "Email and OTP is required.",
      });
    }
    const user = await PendingUser.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "Session expired, Register again.",
      });
    }

    if (user.otpExpire < Date.now()) {
      return res.json({ success: false, message: "OTP Expired" });
    }

    if (user.otp !== otp) {
      return res.json({ success: false, message: "Invalid OTP" });
    }

    await User.create({
      email: user.email,
      name: user.name,
      password: user.password,
      role: user.role,
      isVerified: true,
    });

    await PendingUser.deleteOne({ email });

    res.json({
      success: true,
      message: "OTP verified successfully, Login to continue.",
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const resendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.json({ success: false, message: "Email is required." });
    }
    const otp = generateOTP();
    const user = await PendingUser.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not available" });
    }
    user.otp = otp;
    user.otpExpire = Date.now() + 5 * 60 * 1000;
    await user.save();

    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: "Welcome to Swasthya Sahayak",
      text: `<div style="font-family:sans-serif;">
     <h2>Your OTP Code</h2>
     <p>Use this code to verify your account:</p>
     <h3 style="color:#0165fc;">${otp}</h3>
     <p>This code will expire in 10 minutes.</p>
   </div>`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "OTP resent successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
