const express = require('express');
const app =express();
const User = require('../db/userschema.js');
const Token= require('../db/token');


app.post('/confirmation', function(req,res){
    Token.findOne({ token: req.body.token }, function (err, token) {
        if (!token) return res.status(400).json({ message: 'We were unable to find a valid token. Your token my have expired.' });
else{ 
        // If we found a token, find a matching user
        User.findOne({ _id: token._userId,}, function (err, user) {
            if (!user) return res.status(400).json({ message: 'We were unable to find a user for this token.' });
            if (user.verification) return res.status(400).json({ message: 'This user has already been verified.' });
 
            // Verify and save the user
            user.verification = true;
            user.save(function (err) {
                if (err) { return res.status(500).json({ message: err.message }); }
                else{
                res.status(200).json({message:"The account has been verified. Please log in."});
                }
            });
        });};
    });
    // todays trial
    // router.get('/about', authenticate ,(req,res) => {
    //     console.log('hello');
    // });
});
module.exports = app;