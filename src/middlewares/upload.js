
import multer from "multer";
import path from "path";
import fs from "fs";

const ensureDirExists = (dirPath) => {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
};

const storage = (folderName) => multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(process.cwd(), "uploads", folderName);
        ensureDirExists(uploadDir);
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const safeExt = ext || ".png";
        const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        cb(null, `${unique}${safeExt}`);
    }
});

const imageFileFilter = (req, file, cb) => {
    if (file?.mimetype?.startsWith("image/")) {
        return cb(null, true);
    }
    return cb(new Error("Only image files are allowed"));
};

export const uploadSingleImage = (folderName, fieldName) => {
    const upload = multer({
        storage: storage(folderName),
        fileFilter: imageFileFilter,
        limits: {
            fileSize: 5 * 1024 * 1024,
        },
    }).single(fieldName);

    return (req, res, next) => {
        upload(req, res, (err) => {
            if (err) {
                return res.badRequest(err.message || "File upload failed");
            }
            return next();
        });
    };
};

export const uploadBannerFiles = (folderName) => {
    const fileFilter = (req, file, cb) => {
        if (file?.mimetype?.startsWith("image/") || file?.mimetype?.startsWith("video/")) {
            return cb(null, true);
        }
        return cb(new Error("Only image and video files are allowed"));
    };
    const upload = multer({
        storage: storage(folderName),
        fileFilter,
        limits: {
            fileSize: 20 * 1024 * 1024,
            files: 2,
        },
    }).fields([
        { name: 'bannerImage', maxCount: 1 },
        { name: 'bannerBackgroundVideo', maxCount: 1 },
    ]);

    return (req, res, next) => {
        upload(req, res, (err) => {
            if (err) {
                return res.badRequest(err.message || "File upload failed");
            }
            return next();
        });
    };
};
