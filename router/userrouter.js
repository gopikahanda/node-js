var express= require ('express');

var router = express.Router();

var user=require("../controller/usercontroller.js");
const verify=require('../controller/vtoken');



router.post("/postuser",
    user.Signup);

router.post("/getuser",
    user.login);

router.get("/user",verify,
    user.c);


module.exports = router