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

userRouter.get('/get-user/:id',async(req,res)=>{
  let userId = req.params.id
  let user = await User.find({loan_id : userId})
  let response = {};
  response.status = 200;
  response.success = true;
  response.data = user;

  res.send(response);
})

userRouter.post('/update-user/:id',async(req,res)=>{
  let userId = req.params.id;
  let response = {};
  let user = await User.findOneAndUpdate({ loan_id: userId },{$set:{"status" : "submitted"}});
  if (user){
    response.status = 200;
    response.success = true;
  }
  res.send(response)
})

module.exports = userRouter;
