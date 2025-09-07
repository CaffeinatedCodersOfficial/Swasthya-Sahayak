import express from "express";
import {
  createHospital,
  getHospitals,
} from "../controllers/hospital.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const hospitalRouter = express.Router();

hospitalRouter.post("/create", upload.single("logoFile"), createHospital);

hospitalRouter.get("/all", getHospitals);

export default hospitalRouter;
