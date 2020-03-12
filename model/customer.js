var mongoose=require("mongoose");
var customerSchema =mongoose.Schema(
    {
        Businessname:{
            type:String,
            required:true
        },
        domainname:{
            type:String,
            match:/.+\@.+\..+/,
            require:true,
            unique:true
        },
        logo:{
            type:String,
            required:true

        },

        color:[{type:String,
         headercolor:String,
         headerelementcolor:String,
         elementcolor:String,
         themecolor:String
          
        }]
            
        
    }
)
var customer = mongoose.model('customer',customerSchema)

module.exports = customer;