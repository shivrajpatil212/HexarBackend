import { Router } from 'express';
import { addMissionVision, getAllMissionVision, updateMissionVisionById, deleteMissionVisionById } from './miscellaneous.controller.js';
import { addMissionValidation, updateMissionVisionByIdValidation, deleteMissionVisionByIdValidation } from './miscellaneous.validation.js';
import { protect, authorize } from '../../middlewares/authMiddleware.js';

const miscellaneousRoute = Router();

miscellaneousRoute.post("/addMissionVision", protect, authorize("admin"), addMissionValidation, addMissionVision);

miscellaneousRoute.get("/getAllMissionVision", protect, authorize("admin"), getAllMissionVision);

miscellaneousRoute.put("/updateMissionVisionById", protect, authorize("admin"), updateMissionVisionByIdValidation, updateMissionVisionById);

miscellaneousRoute.delete("/deleteMissionVisionById", protect, authorize("admin"), deleteMissionVisionByIdValidation, deleteMissionVisionById);

export default miscellaneousRoute;