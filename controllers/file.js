import { v4 as uuidv4 } from "uuid";
import fileModel from "../models/file.js";
import { upload } from "../utils/upload.js";

const handleUpload = async (req, res) => {
  upload(req, res, async (err) => {
    if (!req.file || err) {
      return res.status(404).json({
        success: false,
        message: "File upload failed",
      });
    }
    const { filename, path, size } = req.file; // destructuring file name path and its size after saving it to upload folder
    // add file details to database and saving it
    const file = await fileModel.create({
      filename,
      uuid: uuidv4(),
      path,
      size,
    });
    file.save();

    // sending response with show link
    return res.status(200).json({
      success: true,
      file: `${process.env.APP_BASE_URL}/api/v1/show/${file.uuid}`,
    });
  });
};

export default handleUpload;
