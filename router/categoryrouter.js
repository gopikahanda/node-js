var express= require ('express');

var router = express.Router();

var category=require("../controller/categorycontroller.js");
const verify=require('../controller/vtoken');

router.post("/postcategory",verify,
    category.Save);

router.get("/getuser",verify,category.Saved);


module.exports = router