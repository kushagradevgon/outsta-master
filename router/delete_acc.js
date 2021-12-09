const express = require ('express');
const app =express();
const User = require('../db/userschema.js');

app.post('/delete',async  function(req,res){
    try{
        const {id} = req.body;
    const result = await User.deleteOne( {_id :id})
        if(result){
            res.json({message:"Account Deleted"})
        }
        else{
            res.json({message:"Sorry"})
        }
}
catch(err){
    console.log(err)
}
})





module.exports = app;