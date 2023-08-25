import fileModel from "../models/file.js";
import path from "path";

const handleDownload = async (req, res) => {
  try {
    // getting uuid from parameters
    const { uuid } = req.params;
    // finding the file
    const file = await fileModel.findOne({ uuid });
    if (!file) {
      // if file not found
      return res.status(404).json({
        sucess: false,
        message: "Link expired",
      });
    }
    const __dirname = path.resolve(); // getting current directory
    // console.log(__dirname);
    const filePath = `${__dirname}/${file.path}`; // getting file path
    res.download(filePath); // download file from server
  } catch (error) {
    return res.status(500).json({ sucess: false, message: error.message });
  }
};

export default handleDownload;
