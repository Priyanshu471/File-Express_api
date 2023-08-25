import multer from "multer";

let storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

export const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 * 200 },
}).single("myfile");
