const express = require ('express');
const app =express();
const User = require('../db/userschema.js');

app.post('/updateinfo',async function(req,res){
    console.log(req.body)
    const {mail,fullname,username,gender,bio,id} = req.body;
    try{

    const datasaved = await User.updateMany({_id:id},{
        $set:req.body
    })
  
    if(datasaved){
        res.json({message:"data updated"})
    }
    else{
        res.json({message:"error"})
    }}
    catch(err){
        console.log(err);
    }
})




module.exports = app;