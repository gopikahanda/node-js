var express= require ('express');
var joi=require('joi');
var jwt=require('jsonwebtoken');
var dotenv=require('dotenv')
dotenv.config()
const model=require("../model/user.js");
const verify=require('./vtoken');

console.log("welcome to controller");
module.exports.Signup=function(req,res)
{
    console.log("welcome to signup function...");
    console.log(req.body);
  
    var body=new model(req.body)
    body.save(function(err,result)
    {
        if(err)
        {
            console.log("error in file");
            res.send(err);
        }
        else{
            res.send("sent successfully");
        }
        console.log(result);
        
     
    
        
    });
    
}


module.exports.login=async function(request,Response)
{

   
    const getemail = request.body.email;
    const  getpassword   = request.body.password;
    model.findOne( { email :getemail},{},{lean:true  },function(err,data1)
    {
        console.log(data1)
        if (err){
            console.log(err)
           
        }
         else if (data1 )
     {
         if(data1.password===getpassword)
        {
           delete data1.password
           Response.json(data1)
        }
       else
        {
            Response.send("password not match");
        }
     }

     else{
        Response.send("email not found");
        }
    }) ;
 const token=await jwt.sign({_id:request.body._id},process.env.Token_secret)
        Response.header("auth-token",token).send(token);


}
    module.exports.c=function(request,Response)
        {
            Response.json({
                posts:{
                    title:"goodluck",
                    discription:"hyyguys"}
                })
            }