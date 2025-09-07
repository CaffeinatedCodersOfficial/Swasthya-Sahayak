import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    dob: Date,
    gender: { type: String, enum: ["Male", "Female", "Other"] },
    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    allergies: [String],
    contact: { phone: String, email: String },
    emergencyContact: { name: String, relation: String, phone: String },
    address: {
      street: String,
      city: String,
      state: String,
      zip: String,
      country: String,
    },
    prescriptions: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Prescription" },
    ],
    history: [{ type: mongoose.Schema.Types.ObjectId, ref: "History" }],
    appointments: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Appointment" },
    ],
  },
  { timestamps: true }
);

export const Patient = mongoose.model("Patient", patientSchema);
