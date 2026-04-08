import { Router } from "express";
import userRoute from "../modules/user/user.route.js";
import miscellaneousRoute from "../modules/miscellaneous/miscellaneous.route.js";
import aboutHexarRoute from "../modules/aboutHexar/aboutHexar.route.js";
import bannerRoute from "../modules/banner/banner.route.js";

const router = Router();

// API routes
router.use("/user", userRoute);
router.use("/miscellaneous", miscellaneousRoute);
router.use("/aboutHexar", aboutHexarRoute);
router.use("/banner", bannerRoute);

export default router;