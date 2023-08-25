import fileModel from "../models/file.js";
import sendMail from "../utils/email.js";
import template from "../utils/emailTemplate.js";

const handleSend = async (req, res) => {
  const { uuid, emailTo, emailFrom, name } = req.body; // destructuring the data coming from client side
  if (!uuid || !emailTo || !emailFrom || !name) {
    return res.status(422).json({
      sucess: false,
      message: "All fields are required.",
    });
  }
  const file = await fileModel.findOne({ uuid }); // finding the file
  if (file.sender) {
    // if sender exist that means email has been sent
    return res.status(409).json({
      sucess: true,
      message: "Email already sent!",
    });
  }

  file.sender = emailFrom;
  file.sendername = name;
  file.receiver = emailTo;
  await file.save();

  const link = `${process.env.APP_BASE_URL}/api/v1/download/${file.uuid}`; // creating the link
  const size = parseInt(file.size / 1000); // calculate size of the file
  // sending email with following details
  sendMail({
    from: emailFrom,
    to: emailTo,
    subject: "File Express file sharing",
    text: `${name} shared a file with you.`,
    html: template({
      name: name,
      size: size + `${size > 1000 ? "MB" : "KB"}`,
      link: link,
      expiry: "12 hours",
      url: process.env.CLIENT_URL,
    }),
  });
  return res.status(200).json({
    sucess: true,
    message: "Email sent successfully",
  });
};

export default handleSend;
