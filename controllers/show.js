import fileModel from "../models/file.js";

const handleShow = async (req, res) => {
  try {
    const { uuid } = req.params; // uuid of file from parameters
    const file = await fileModel.findOne({ uuid }); //finding the file
    if (!file) {
      // handling error
      return res.status(404).json({
        sucess: false,
        message: "Link expired",
      });
    }
    // returning the details of the file with the download link
    return res.status(200).json({
      sucess: true,
      fileName: file.filename,
      size: file.size,
      uuid: uuid,
      downloadLink: `${process.env.APP_BASE_URL}/api/v1/download/${file.uuid}`,
    });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: error.message,
    });
  }
};
export default handleShow;
