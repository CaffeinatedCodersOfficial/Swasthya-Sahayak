import express from "express";
import { upload } from "../middlewares/multer.middleware.js";

const uploadRouter = express.Router();

// Single file upload
uploadRouter.post("/upload", upload.single("file"), (req, res) => {
  try {
    // req.file contains Cloudinary info
    res.json({
      message: "File uploaded successfully",
      url: req.file?.path || req.file?.secure_url, // ✅ Cloudinary URL
      public_id: req.file?.filename || req.file?.public_id, // ✅ Cloudinary public ID
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Multiple files upload
uploadRouter.post("/uploads", upload.array("files", 5), (req, res) => {
  try {
    const urls = req.files.map((file) => ({
      url: file.path,
      public_id: file.filename,
    }));
    res.json({ message: "Files uploaded", urls });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default uploadRouter;
