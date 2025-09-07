import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    qualifications: [String],
    specialization: { type: String, required: true },
    experience: { type: Number, default: 0 }, // in years
    languages: [String],
    consultationFee: { type: Number, default: 0 },
    hospital: { type: mongoose.Schema.Types.ObjectId, ref: "Hospital" },
    availability: {
      days: [String], // e.g. ["Mon", "Wed", "Fri"]
      timeSlots: [String], // e.g. ["10:00-12:00", "14:00-17:00"]
    },
    contact: { phone: String, email: String },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
