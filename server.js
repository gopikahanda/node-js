require("./dbconnection.js");

var express= require ('express');
var app = express();

const swaggerUi = require ('swagger-ui-express');
const swaggerDocument = require('./swagger.json')


var bodyParser = require('body-parser');
app.use(bodyParser.json())


var routes = require("./router/userrouter.js");
var router=require("./router/categoryrouter.js");
var routers=require("./router/cbrouter.js");
const dotenv=require("dotenv");
dotenv.config();

app.use('/' , routes)
{
    console.log("send to router.....");
}
app.use('/' , router)
{
    console.log("send to router.....");
}
app.use('/' , routers)
{
    console.log("send to router.....");
}
app.use('/swa' , swaggerUi.serve,swaggerUi.setup(swaggerDocument));



app.listen(9008)
console.log("server is running at port 9008") 