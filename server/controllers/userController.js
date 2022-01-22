import asyncHandler from "express-async-handler";
import {mailRegister} from "../utils/nodeMailer.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import md5 from "md5";

export const getLogin = (req, res, next) => {
  res.send("Login");
};

export const authUser = asyncHandler(async (req, res, next) => {
  // End

  const {email, password, googleAuth} = req.body;

  const user = await User.findOne({email});

  if (googleAuth && googleAuth === user.googleAuth) {
    res.status(200).json({
      _id: user._id,
      username: user.name,
      email: user.email,
      googleAuth: user.googleAuth,
      isAdmin: user.isAdmin,
      image: user.image,

      token: generateToken(user._id),
    });
  } else if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      _id: user._id,
      username: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      googleAuth: user.googleAuth,
      token: generateToken(user._id),
      image: user.image,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or Password");
  }
});

export const registerUser = asyncHandler(async (req, res, next) => {
  const {name, email, password} = req.body;

  const userExist = await User.findOne({email});

  if (userExist) {
    res.status(400);
    throw new Error("User already exist");
  }

  const user = await User.create({
    name,
    email,
    password,
    image: `http://gravatar.com/avatar/${md5(email)}?d=identicon`,
  });

  if (user) {
    mailRegister(name, email);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
    // here implement
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

export const updateUserProfile = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("Invalid Email or Password");
  }
});

export const getUserProfile = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export const adminUserList = asyncHandler(async (req, res, next) => {
  const userList = await User.find();

  if (userList) {
    res.status(200);
    res.json(userList);
  } else {
    res.status(404);
    throw new Erorr("User Not Found");
  }
});

export const adminGetUser = asyncHandler(async (req, res, next) => {
  const userId = req.params.id;

  const user = await User.findById(userId);

  if (user) {
    res.status(200);
    res.json(user);
  } else {
    res.status(404);
    throw new Erorr("User Not Found");
  }
});

export const adminEditUser = asyncHandler(async (req, res, next) => {
  const {name, email, phone, dateOfBirth, address, password, isAdmin, image} =
    req.body;

  const userId = req.params.id;
  const user = await User.findById(userId);

  if (user) {
    user.name = name;
    user.email = email;
    user.phone = phone;
    user.dateOfBirth = dateOfBirth;
    user.address = address;
    user.password = password;
    user.isAdmin = isAdmin;
    user.image = image;
  } else {
    res.status(404);
    throw new Erorr("User Not Found");
  }
  const updateUser = await user.save();
  res.status(201).json(updateUser);
});

export const adminDeleteUser = asyncHandler(async (req, res, next) => {
  const userId = req.params.id;

  const user = await User.findById(userId);

  if (user) {
    await user.remove();
    res.json({message: "User was deleted successfully"});
  } else {
    res.status(404);
    throw new Erorr("User Not Found");
  }
});
