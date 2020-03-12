var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
  
  firstName: {
      type:String
     },
  emailId: {
      type:String, 
      unique:true,
      index:true
    },
  password:{
      type:String,
     
    },
  phonenumber: {
      type:String,
     
    },
    createdAt:{
      type:Date
    },
    updatedAt:{
      type:Date
    },
    status:{
      type:String,
      enum:['active','inActive']
  },
  facebookId:{
    type:String
  },
  googleId:{
    type:String
  }
});
module.exports=mongoose.model('user',userSchema)