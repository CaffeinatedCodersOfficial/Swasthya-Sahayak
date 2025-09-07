import mongoose from "mongoose";

const pendingUserSchema = new mongoose.Schema({
  name: {
    type: String,
    requied: [true, "Name is required"],
    trim: true,
    minlength: 1,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"],
  },
  role: {
    type: String,
    enum: ["Patient", "Doctor", "Hospital"],
    default: "user",
  },
  otp: {
    type: String,
    required: true,
  },
  otpExpire: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 300,
  },
});

export const PendingUser = mongoose.model("PendingUser", pendingUserSchema);
