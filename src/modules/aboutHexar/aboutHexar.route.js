
import { Router } from 'express';
import { addHexarFamily, getAllHexarFamily, updateHexarFamilyById, deleteHexarFamilyById, addHexarTimeline, getAllHexarTimeline, updateHexarTimelineById, deleteHexarTimelineById, addHexarFounder, getAllHexarFounder, updateHexarFounderById, deleteHexarFounderById, addHexarStandOut, getAllHexarStandOut, updateHexarStandOutById, deleteHexarStandOutById } from './aboutHexar.controller.js';
import { addHexarFamilyValidation, updateHexarFamilyByIdValidation, deleteHexarFamilyByIdValidation, addHexarTimelineValidation, updateHexarTimelineByIdValidation, deleteHexarTimelineByIdValidation, addHexarFounderValidation, updateHexarFounderByIdValidation, deleteHexarFounderByIdValidation, addHexarStandOutValidation, updateHexarStandOutByIdValidation, deleteHexarStandOutByIdValidation } from './aboutHexar.validation.js';
import { protect, authorize } from '../../middlewares/authMiddleware.js';
import { uploadSingleImage } from '../../middlewares/upload.js';

const aboutHexarRoute = Router();

aboutHexarRoute.post("/addHexarFamily", protect, authorize("admin"), addHexarFamilyValidation, addHexarFamily);

aboutHexarRoute.get("/getAllHexarFamily", protect, authorize("admin"), getAllHexarFamily);

aboutHexarRoute.put("/updateHexarFamilyById", protect, authorize("admin"), updateHexarFamilyByIdValidation, updateHexarFamilyById);

aboutHexarRoute.delete("/deleteHexarFamilyById", protect, authorize("admin"), deleteHexarFamilyByIdValidation, deleteHexarFamilyById);

aboutHexarRoute.post("/addHexarTimeline", protect, authorize("admin"), uploadSingleImage("timeline", "timelineImageUrl"), addHexarTimelineValidation, addHexarTimeline);

aboutHexarRoute.get("/getAllHexarTimeline", protect, authorize("admin"), getAllHexarTimeline);

aboutHexarRoute.put("/updateHexarTimelineById", protect, authorize("admin"), uploadSingleImage("timeline", "timelineImageUrl"), updateHexarTimelineByIdValidation, updateHexarTimelineById);

aboutHexarRoute.delete("/deleteHexarTimelineById", protect, authorize("admin"), deleteHexarTimelineByIdValidation, deleteHexarTimelineById);

aboutHexarRoute.post("/addHexarFounder", protect, authorize("admin"), uploadSingleImage("founder", "founderImageUrl"), addHexarFounderValidation, addHexarFounder);

aboutHexarRoute.get("/getAllHexarFounder", protect, authorize("admin"), getAllHexarFounder);

aboutHexarRoute.put("/updateHexarFounderById", protect, authorize("admin"), uploadSingleImage("founder", "founderImageUrl"), updateHexarFounderByIdValidation, updateHexarFounderById);

aboutHexarRoute.delete("/deleteHexarFounderById", protect, authorize("admin"), deleteHexarFounderByIdValidation, deleteHexarFounderById);

aboutHexarRoute.post("/addHexarStandOut", protect, authorize("admin"), uploadSingleImage("standout", "standOutImageUrl"), addHexarStandOutValidation, addHexarStandOut);

aboutHexarRoute.get("/getAllHexarStandOut", protect, authorize("admin"), getAllHexarStandOut);

aboutHexarRoute.put("/updateHexarStandOutById", protect, authorize("admin"), uploadSingleImage("standout", "standOutImageUrl"), updateHexarStandOutByIdValidation, updateHexarStandOutById);

aboutHexarRoute.delete("/deleteHexarStandOutById", protect, authorize("admin"), deleteHexarStandOutByIdValidation, deleteHexarStandOutById);

export default aboutHexarRoute;
