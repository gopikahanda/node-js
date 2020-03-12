const mongoose = require('mongoose')

const categorySchema =  mongoose.Schema({

    category:{
        type:String
    },
        subcategory:[{
        type : String,
        required : true,
        }],
       // status:{
        //type:String,
        //enum:['active,notactive'],
      //  default:"active"
    //},
    createdAt:{
        type:Date
    }
  
   
   
})
var category = mongoose.model('category',categorySchema)

module.exports = category;