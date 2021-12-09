const express= require("express");
const app = express();
const authenticate = require('./authenticate.js')
const cookieParser = require ("cookie-parser");
app.use(cookieParser());
app.get("/aboutbackend", authenticate ,function(req,res){

    res.send(req.rootUser);
});
module.exports = app;