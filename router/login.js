const express = require('express');
const app =express();
const User = require('../db/userschema.js');
const bcrypt = require('bcrypt');


app.use(express.json());

app.post('/login', async function(req, res){
    let token;
    const {username,password}=req.body;
      if(!username || !password)
      {
          res.status(400).json({message: "Required quantity can be null"})
      };
      try {
        
        
    
        const found = await User.findOne({username: username})
            if(found.verification===true){
           if(found)
            {
                const login = await bcrypt.compare(password, found.password);
                               
                if(login){
                    token = await found.generateAuthToken();
                    res.cookie('jwt',token)
                    res.status(201).json({message: "User LOGGED In"})   


                }
                else{
                    res.status(400).json({message:"Invalid credentials"})
                }
            }
            else{
                res.status(400).json({message:"Invalid credentials"})
                
        }
    }
        else{
            res.status(400).json({message:"Account is not verified"})
        }
        }
        catch(err){
            res.status(500).json({message:err}),
            console.log(err)
        }
});

module.exports = app;