const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userschema = new mongoose.Schema({

    mail:{
        type: String
    },
    gender:{
        type: String,
    },
    bio:{
        type: String,
    },
   
    fullname:{
        type:String
    },

    username:{
        type: String,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    verification:{
        type:Boolean,
        default:false
    },
    tokens:[
        {  token:{
              type: String,
              required:true,
          }
        }]



})

userschema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12);
    }
    next();
})

userschema.methods.generateAuthToken = async function(){
    try{
            let webtoken = jwt.sign({_id: this._id},"LOGINPAGEUSINGEXPRESSNODE");
            this.tokens = this.tokens.concat({token: webtoken});
            await this.save();
            return webtoken;
    
    }
    catch(err){
        console.log(err);
    }
}    

const User = mongoose.model('USER', userschema);
module.exports = User