import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "File_sharing",
    })
    .then((c) => console.log(`Database connection established!`))
    .catch((e) => console.log(e));
};
