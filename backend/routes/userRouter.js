const express = require("express");
const User = require("../models/userModel");
const data = require("../sample_userdata");
const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  const createdUsers = await User.create(data.users);
  res.send({ createdUsers: createdUsers });
});

userRouter.get("/all-users", async (req, res) => {
  let users = await User.find({})
  let testArr = []
  let response = {};
  response.status = 200;
  response.success = true;
  response.data = users;
  
  res.send(response);
});

module.exports = userRouter;
