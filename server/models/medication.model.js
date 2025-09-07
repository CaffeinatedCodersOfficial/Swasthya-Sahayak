import mongoose from "mongoose";

const medicationSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    medicationName: { type: String, required: true },
    dosage: { amount: String, frequency: String, duration: String }, // cleaner
    startDate: Date,
    endDate: Date,
    prescribedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
    instructions: String,
    isActive: { type: Boolean, default: true },
    alternative: String,
  },
  { timestamps: true }
);

export const Medication = mongoose.model("Medication", medicationSchema);
