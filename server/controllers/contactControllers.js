import Contact from "../models/contactModel.js";

const postContact = async (req, res, next) => {
  const { name, email, subject, message } = req.body;
  const contact = new Contact({
    username: name,
    email: email,
    subject: subject,
    message: message,
  });
  await contact.save().then(() => {
    console.log("We got your messsage");
  });
  res.status(201).json({
    username: name,
    email: email,
    subject: subject,
    message,
  });
};

export { postContact };
