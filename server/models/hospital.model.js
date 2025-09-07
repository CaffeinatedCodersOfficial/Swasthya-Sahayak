import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    branchCode: { type: String },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    licenceNo: { type: String, required: true },
    logoFile: { type: String },
    address: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      zip: { type: String },
      country: { type: String },
    },
    departments: [{ type: String }],
    facilities: [{ type: String }],
    website: { type: String },
  },
  { timestamps: true }
);

export const Hospital = mongoose.model("Hospital", hospitalSchema);
