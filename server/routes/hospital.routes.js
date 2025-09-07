import express from "express";
import {
  createHospital,
  getHospitals,
  isHospitalCreated,
} from "../controllers/hospital.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { isAuth } from "../middlewares/auth.middleware.js";

const hospitalRouter = express.Router();

hospitalRouter.post("/create", upload.single("logoFile"), createHospital);

hospitalRouter.get("/all", getHospitals);
hospitalRouter.get("/is-hospital-created", isAuth, isHospitalCreated);

export default hospitalRouter;
