var express= require ('express');

var router = express.Router();

var customer=require("../controller/customercontroller.js");
const verify=require('../controller/vtoken');


router.post("/postcust",verify,
    customer.cus);

router.get("/getuser",verify,customer.cus1);


module.exports = router