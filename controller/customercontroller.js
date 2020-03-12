var express= require ('express');
var joi=require('joi');
const customer=require("../model/customer.js");
//const verify=require('/vtoken');


module.exports.cus=function(req,res)
{
    console.log("save function...");
    console.log(req.body);
  
    var body=new customer(req.body);
    

    body.save(function(err,result)
    {
        if(err)
        {
            console.log("error in file");
            res.send(err);
        }
        else{
            res.send("saved successfully");
        }
        console.log(result);
        
    });
    
}
module.exports.cus1=function(req,res)
{
    customer.find(function(err,data) {
        if(err)
            res.status(400);
        else
        res.status(200).send(data);
    });

}
