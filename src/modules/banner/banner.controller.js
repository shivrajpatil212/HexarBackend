import BannerModel from "./banner.model.js";

const getBaseUrl = (req) => `${req.protocol}://${req.get('host')}`;

export const addBanner = async (req, res) => {
    try {
        const { bannerTitle, bannerSubTitle } = req.body;
        const baseUrl = getBaseUrl(req);
        const bannerImage = req.files?.bannerImage?.[0] ? `${baseUrl}/uploads/banner/${req.files.bannerImage[0].filename}` : null;
        const bannerBackgroundVideo = req.files?.bannerBackgroundVideo?.[0] ? `${baseUrl}/uploads/banner/${req.files.bannerBackgroundVideo[0].filename}` : null;
        if (!bannerImage || !bannerBackgroundVideo) {
            return res.badRequest("bannerImage and bannerBackgroundVideo are required");
        }
        const banner = new BannerModel({ bannerTitle, bannerSubTitle, bannerImage, bannerBackgroundVideo });
        await banner.save();
        return res.success(banner, "Banner added successfully");
    } catch (err) {
        console.error('Error:----------', err);
        return res.internalServerError("An error occurred while adding the banner.");
    }
};

export const getAllBanner = async (req, res) => {
    try {
        const list = await BannerModel.find({ isActive: true }).sort({ updatedAt: -1 });
        return res.success(list, "Banner fetched successfully");
    } catch (err) {
        console.error('Error:----------', err);
        return res.internalServerError("An error occurred while fetching the banner.");
    }
};

export const updateBannerById = async (req, res) => {
    try {
        const { id } = req.query;
        const updateData = { ...req.body };
        const baseUrl = getBaseUrl(req);
        if (req.files?.bannerImage?.[0]) {
            updateData.bannerImage = `${baseUrl}/uploads/banner/${req.files.bannerImage[0].filename}`;
        }
        if (req.files?.bannerBackgroundVideo?.[0]) {
            updateData.bannerBackgroundVideo = `${baseUrl}/uploads/banner/${req.files.bannerBackgroundVideo[0].filename}`;
        }
        const updated = await BannerModel.findByIdAndUpdate(id, updateData, { new: true });
        if (!updated) return res.notFound("Banner not found");
        return res.success(updated, "Banner updated successfully");
    } catch (err) {
        console.error('Error:----------', err);
        return res.internalServerError("An error occurred while updating the banner.");
    }
};

export const deleteBannerById = async (req, res) => {
    try {
        const { id } = req.query;
        const deleted = await BannerModel.findByIdAndUpdate(id, { isActive: false }, { new: true });
        if (!deleted) return res.notFound("Banner not found");
        return res.success(deleted, "Banner deleted successfully");
    } catch (err) {
        console.error('Error:----------', err);
        return res.internalServerError("An error occurred while deleting the banner.");
    }
};