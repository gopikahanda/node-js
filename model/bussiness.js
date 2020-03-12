var mongoose = require('mongoose');
var bussinessSchema = mongoose.Schema({
  
  selectOne: {
      type:String,
      enum:["I want this Market place for myself","I want to onboard other companies on my market place"],
      required: true
     }
});
module.exports=mongoose.model('bussin',bussinessSchema)