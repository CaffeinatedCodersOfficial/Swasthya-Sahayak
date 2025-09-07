import mongoose from "mongoose";

const prescriptionSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: "Appointment" },
    medications: [{ type: mongoose.Schema.Types.ObjectId, ref: "Medication" }],
    notes: String,
    condition: String,
    files: [
      {
        url: { type: String, required: true },
        fileType: {
          type: String,
          enum: ["pdf", "image", "doc"],
          required: true,
        },
        uploadedAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

export const Prescription = mongoose.model("Prescription", prescriptionSchema);
