const express = require('express');
const app =express();
const User = require('../db/userschema.js');
const crypto = require('crypto');
const sendgridtransport = require('nodemailer-sendgrid-transport');
const Token= require('../db/token');
const nodemailer = require('nodemailer');

app.use(express.json())
app.post('/signup',async function(req, res){
    const {mail,fullname,username,password} = req.body;
   
    if(!mail||!fullname||!username||!password){
        res.status(401).json({message:"Required quantity can't be null"});
    }
    else{
        try{
            const found = await User.findOne({mail:mail});
            if(found){
                res.status(401).json({message: "User Exist"})
            }
            else{
                const adduser= new User({mail: mail, fullname : fullname,  username: username,password: password});
                const datasaved = await adduser.save();
                if(datasaved){
                    var token = new Token({ _userId: adduser._id, token: crypto.randomBytes(16).toString('hex') });
                token.save(function (err) {
                    if (err) { return res.status(500).send({ message: err.message }); }
         
                    // Send the email
                    var transporter = nodemailer.createTransport(sendgridtransport({
                        auth:{
                            api_key: "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"
                        },
                     }));
                    var mailOptions = { from: 'kushagradevgon@gmail.com', to: adduser.mail, subject: 'Account Verification Token', text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + "outsta.herokuapp.com" + '\/confirmation\/'+'token\=' + token.token + '\n' };
                    transporter.sendMail(mailOptions, function (err) {
                        if (err) { return res.status(500).send({ msg: err.message }); }
                        res.status(200).send({message:'User Created & A verification email has been sent'});
                    });
                });
                
                }
            }
    }catch(err){
        res.status(401).json({error: err})
        console.log(err)

    }
    }
    
})

module.exports = app;