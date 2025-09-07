import { Hospital } from "../models/hospital.model.js";
import { User } from "../models/user.model.js";

export const createHospital = async (req, res) => {
  try {
    const {
      name,
      branchCode,
      phone,
      email,
      licenceNo,
      street,
      city,
      state,
      zip,
      country,
      departments,
      facilities,
      website,
    } = req.body;

    // ✅ Fix: single file upload
    const logoFileUrl = req.file?.path || req.file?.secure_url || null;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const hospital = await Hospital.create({
      name,
      userId: user._id,
      branchCode,
      phone,
      email,
      licenceNo,
      logoFile: logoFileUrl,
      address: { street, city, state, zip, country },
      departments: departments
        ? departments.split(",").map((d) => d.trim())
        : [],
      facilities: facilities ? facilities.split(",").map((f) => f.trim()) : [],
      website,
    });

    res.status(201).json({
      success: true,
      message: "Hospital registered successfully",
      hospital,
    });
  } catch (error) {
    console.error("❌ Error creating hospital:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

export const getHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: hospitals.length,
      hospitals,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
