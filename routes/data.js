const express = require("express");
const {postData, getData}=require("../controller/dataController")

const dataRouter=express.Router();
// return OK message
dataRouter.route('/').get((req, res) => {
    res.send('OK');
  });
dataRouter.route('/bfhl').get(getData).post(postData);

module.exports=dataRouter;