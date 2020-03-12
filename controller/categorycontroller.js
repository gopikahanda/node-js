var express= require ('express');
var joi=require('joi');
const category=require("../model/category.js");
//const verify=require('/vtoken');

module.exports.Save=function(req,res)
{
    console.log("save function...");
    console.log(req.body);
  
    var body=new category(req.body);
    
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

module.exports.Saved=function(req,res)
{
  
    body = req.body;
    category.find(function(err,data) {
        if(err)
            res.status(400);
        else
        res.status(200).send(data);
    });

}
