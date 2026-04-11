
import HexarFamilyModel from "./hexarFamily.model.js";
import HexarTimelineModel from "./hexarTimeline.model.js";
import HexarFounderModel from "./hexarFounder.model.js";
import HexarStandOutModel from "./hexarStandOut.model.js";

const getBaseUrl = (req) => `${req.protocol}://${req.get('host')}`;

export const addHexarFamily = async (req, res) => {
    try {
        const hexarFamily = new HexarFamilyModel(req.body);
        await hexarFamily.save();
        return res.success(hexarFamily, "Hexar Family added successfully");
    } catch (err) {
        console.error('Error:----------', err);
        return res.internalServerError("An error occurred while adding the hexar family.");
    }
};

export const getAllHexarFamily = async (req, res) => {
    try {
        const list = await HexarFamilyModel.find({ isActive: true }).sort({ updatedAt: -1 });
        return res.success(list, "Hexar Family fetched successfully");
    } catch (err) {
        console.error('Error:----------', err);
        return res.internalServerError("An error occurred while fetching the hexar family.");
    }
};

export const updateHexarFamilyById = async (req, res) => {
    try {
        const { id } = req.query;
        const updated = await HexarFamilyModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updated) {
            return res.notFound("Hexar Family not found");
        }
        return res.success(updated, "Hexar Family updated successfully");
    } catch (err) {
        console.error('Error:----------', err);
        return res.internalServerError("An error occurred while updating the hexar family.");
    }
};

export const deleteHexarFamilyById = async (req, res) => {
    try {
        const { id } = req.query;
        const deleted = await HexarFamilyModel.findByIdAndUpdate(id, { isActive: false }, { new: true });
        if (!deleted) {
            return res.notFound("Hexar Family not found");
        }
        return res.success(deleted, "Hexar Family deleted successfully");
    } catch (err) {
        console.error('Error:----------', err);
        return res.internalServerError("An error occurred while deleting the hexar family.");
    }
};

export const addHexarTimeline = async (req, res) => {
    try {
        const { timelineYear, timelineTitle, timelineDescription } = req.body;
        const baseUrl = getBaseUrl(req);
        const timelineImageUrl = req.file ? `${baseUrl}/uploads/timeline/${req.file.filename}` : null;
        if (!timelineImageUrl) {
            return res.badRequest("timelineImageUrl is required");
        }
        const hexarTimeline = new HexarTimelineModel({ timelineYear, timelineTitle, timelineDescription, timelineImageUrl });
        await hexarTimeline.save();
        return res.success(hexarTimeline, "Hexar Timeline added successfully");
    } catch (err) {
        console.error('Error:----------', err);
        return res.internalServerError("An error occurred while adding the hexar timeline.");
    }
};

export const getAllHexarTimeline = async (req, res) => {
    try {
        const list = await HexarTimelineModel.find({ isActive: true }).sort({ updatedAt: -1 });
        return res.success(list, "Hexar Timeline fetched successfully");
    } catch (err) {
        console.error('Error:----------', err);
        return res.internalServerError("An error occurred while fetching the hexar timeline.");
    }
};

export const updateHexarTimelineById = async (req, res) => {
    try {
        const { id } = req.query;
        const updateData = { ...req.body };
        const baseUrl = getBaseUrl(req);
        if (req.file) {
            updateData.timelineImageUrl = `${baseUrl}/uploads/timeline/${req.file.filename}`;
        }
        const updated = await HexarTimelineModel.findByIdAndUpdate(id, updateData, { new: true });
        if (!updated) return res.notFound("Hexar Timeline not found");
        return res.success(updated, "Hexar Timeline updated successfully");
    } catch (err) {
        console.error('Error:----------', err);
        return res.internalServerError("An error occurred while updating the hexar timeline.");
    }
};

export const deleteHexarTimelineById = async (req, res) => {
    try {
        const { id } = req.query;
        const deleted = await HexarTimelineModel.findByIdAndUpdate(id, { isActive: false }, { new: true });
        if (!deleted) return res.notFound("Hexar Timeline not found");
        return res.success(deleted, "Hexar Timeline deleted successfully");
    } catch (err) {
        console.error('Error:----------', err);
        return res.internalServerError("An error occurred while deleting the hexar timeline.");
    }
};

export const addHexarFounder = async (req, res) => {
    try {
        const { founderName, founderDesignation } = req.body;
        const baseUrl = getBaseUrl(req);
        const founderImageUrl = req.file ? `${baseUrl}/uploads/founder/${req.file.filename}` : null;
        if (!founderImageUrl) {
            return res.badRequest("founderImageUrl is required");
        }
        const hexarFounder = new HexarFounderModel({ founderName, founderDesignation, founderImageUrl });
        await hexarFounder.save();
        return res.success(hexarFounder, "Hexar Founder added successfully");
    } catch (err) {
        console.error('Error:----------', err);
        return res.internalServerError("An error occurred while adding the hexar founder.");
    }
};

export const getAllHexarFounder = async (req, res) => {
    try {
        const list = await HexarFounderModel.find({ isActive: true }).sort({ updatedAt: -1 });
        return res.success(list, "Hexar Founder fetched successfully");
    } catch (err) {
        console.error('Error:----------', err);
        return res.internalServerError("An error occurred while fetching the hexar founder.");
    }
};

export const updateHexarFounderById = async (req, res) => {
    try {
        const { id } = req.query;
        const updateData = { ...req.body };
        const baseUrl = getBaseUrl(req);
        if (req.file) {
            updateData.founderImageUrl = `${baseUrl}/uploads/founder/${req.file.filename}`;
        }
        const updated = await HexarFounderModel.findByIdAndUpdate(id, updateData, { new: true });
        if (!updated) return res.notFound("Hexar Founder not found");
        return res.success(updated, "Hexar Founder updated successfully");
    } catch (err) {
        console.error('Error:----------', err);
        return res.internalServerError("An error occurred while updating the hexar founder.");
    }
};

export const deleteHexarFounderById = async (req, res) => {
    try {
        const { id } = req.query;
        const deleted = await HexarFounderModel.findByIdAndUpdate(id, { isActive: false }, { new: true });
        if (!deleted) return res.notFound("Hexar Founder not found");
        return res.success(deleted, "Hexar Founder deleted successfully");
    } catch (err) {
        console.error('Error:----------', err);
        return res.internalServerError("An error occurred while deleting the hexar founder.");
    }
};

export const addHexarStandOut = async (req, res) => {
    try {
        const { standOutTitle, standOutDescription } = req.body;
        const baseUrl = getBaseUrl(req);
        const standOutImageUrl = req.file ? `${baseUrl}/uploads/standout/${req.file.filename}` : null;
        if (!standOutImageUrl) {
            return res.badRequest("standOutImageUrl is required");
        }
        const hexarStandOut = new HexarStandOutModel({ standOutTitle, standOutDescription, standOutImageUrl });
        await hexarStandOut.save();
        return res.success(hexarStandOut, "Hexar StandOut added successfully");
    } catch (err) {
        console.error('Error:----------', err);
        return res.internalServerError("An error occurred while adding the hexar standout.");
    }
};

export const getAllHexarStandOut = async (req, res) => {
    try {
        const list = await HexarStandOutModel.find({ isActive: true }).sort({ updatedAt: -1 });
        return res.success(list, "Hexar StandOut fetched successfully");
    } catch (err) {
        console.error('Error:----------', err);
        return res.internalServerError("An error occurred while fetching the hexar standout.");
    }
};

export const updateHexarStandOutById = async (req, res) => {
    try {
        const { id } = req.query;
        const updateData = { ...req.body };
        const baseUrl = getBaseUrl(req);
        if (req.file) {
            updateData.standOutImageUrl = `${baseUrl}/uploads/standout/${req.file.filename}`;
        }
        const updated = await HexarStandOutModel.findByIdAndUpdate(id, updateData, { new: true });
        if (!updated) return res.notFound("Hexar StandOut not found");
        return res.success(updated, "Hexar StandOut updated successfully");
    } catch (err) {
        console.error('Error:----------', err);
        return res.internalServerError("An error occurred while updating the hexar standout.");
    }
};

export const deleteHexarStandOutById = async (req, res) => {
    try {
        const { id } = req.query;
        const deleted = await HexarStandOutModel.findByIdAndUpdate(id, { isActive: false }, { new: true });
        if (!deleted) return res.notFound("Hexar StandOut not found");
        return res.success(deleted, "Hexar StandOut deleted successfully");
    } catch (err) {
        console.error('Error:----------', err);
        return res.internalServerError("An error occurred while deleting the hexar standout.");
    }
};
