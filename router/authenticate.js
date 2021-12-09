const jwt = require("jsonwebtoken");
const User = require("../db/userschema");


const Authenticate = async (req, res, next) =>{
    try{
        // const token = req.body;
        const token = req.cookies.jwt;
        const verifyToken = jwt.verify(token,"LOGINPAGEUSINGEXPRESSNODE");

        const rootUser = await User.findOne({ _id:verifyToken._id, "tokens.token" : token});

        if(!rootUser) { throw new Error('User not found') }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
  
    } catch(err){
        res.status(401).send('Unauthorized: No token provided');
        console.log(err);
        
    }
    
    
    next();
}
module.exports = Authenticate;