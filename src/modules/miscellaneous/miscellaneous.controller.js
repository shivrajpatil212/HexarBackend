import MiscellaneousModel from "./miscellaneous.model.js";

export const addMissionVision = async (req, res) => {
    try {
        const miscellaneous = new MiscellaneousModel(req.body);
        await miscellaneous.save();
        return res.success(miscellaneous, "Mission and Vision added successfully");
    } catch (err) {
        console.error('Error:----------', err);
        return res.internalServerError("An error occurred while adding the mission and vision.");
    }
};

export const getAllMissionVision = async (req, res) => {
    try {
        const list = await MiscellaneousModel.find({ isActive: true }).sort({ updatedAt: -1 });
        return res.success(list, "Mission and Vision fetched successfully");
    } catch (err) {
        console.error('Error:----------', err);
        return res.internalServerError("An error occurred while fetching the mission and vision.");
    }
};

export const updateMissionVisionById = async (req, res) => {
    try {
        const { id } = req.query;
        const updated = await MiscellaneousModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updated) {
            return res.notFound("Mission and Vision not found");
        }
        return res.success(updated, "Mission and Vision updated successfully");
    } catch (err) {
        console.error('Error:----------', err);
        return res.internalServerError("An error occurred while updating the mission and vision.");
    }
};

export const deleteMissionVisionById = async (req, res) => {
    try {
        const { id } = req.query;
        const deleted = await MiscellaneousModel.findByIdAndUpdate(id, { isActive: false }, { new: true });
        if (!deleted) {
            return res.notFound("Mission and Vision not found");
        }
        return res.success(deleted, "Mission and Vision deleted successfully");
    } catch (err) {
        console.error('Error:----------', err);
        return res.internalServerError("An error occurred while deleting the mission and vision.");
    }
};