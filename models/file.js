import mongoose from "mongoose";

const fileSchema = mongoose.Schema(
  {
    filename: { type: String, required: true },
    path: { type: String, required: true },
    size: { type: Number, required: true },
    uuid: { type: String, required: true },
    sender: { type: String, required: false },
    sendername: { type: String, required: false },
    receiver: { type: String, required: false },
  },
  { timestamps: true }
);
const fileModel = new mongoose.model("file", fileSchema);
export default fileModel;
