const express = require("express");
const {postData, getData}=require("../controller/dataController")

const dataRouter=express.Router();

dataRouter.route('/bfhl').get(getData).post(postData);

module.exports=dataRouter;