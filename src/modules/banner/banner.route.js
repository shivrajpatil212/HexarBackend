import { Router } from 'express';
import { addBanner, getAllBanner, updateBannerById, deleteBannerById } from './banner.controller.js';
import { addBannerValidation, updateBannerByIdValidation, deleteBannerByIdValidation } from './banner.validation.js';
import { protect, authorize } from '../../middlewares/authMiddleware.js';
import { uploadBannerFiles } from '../../middlewares/upload.js';

const bannerRoute = Router();

bannerRoute.post("/addBanner", protect, authorize("admin"), uploadBannerFiles("banner"), addBannerValidation, addBanner);

bannerRoute.get("/getAllBanner", protect, authorize("admin"), getAllBanner);

bannerRoute.put("/updateBannerById", protect, authorize("admin"), uploadBannerFiles("banner"), updateBannerByIdValidation, updateBannerById);

bannerRoute.delete("/deleteBannerById", protect, authorize("admin"), deleteBannerByIdValidation, deleteBannerById);

export default bannerRoute;