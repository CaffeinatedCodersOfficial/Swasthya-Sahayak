import mongoose from "mongoose";

const historySchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
    hospitalId: { type: mongoose.Schema.Types.ObjectId, ref: "Hospital" },
    prescriptionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Prescription",
    },
    status: {
      type: String,
      enum: ["Ongoing", "Recovered", "Critical"],
      default: "Ongoing",
    },
    notes: String,
    mode: { type: String, enum: ["Online", "Offline"], default: "Offline" },
  },
  { timestamps: true }
);

export const History = mongoose.model("History", historySchema);
