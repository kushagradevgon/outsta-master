const express = require('express');

const app = express();
require('./db/conn.js');
app.use(require('./router/signup.js'));
app.use(require('./router/confirmation.js'));
app.use(require('./router/login.js'));
app.use(require('./router/about.js'));
app.use(require('./router/updateinfo.js'));
app.use(require('./router/delete_acc.js'))


const PORT =process.env.PORT || 5000;
if(process.env.NODE_ENV =="production"){
    app.use(express.static("insta/build"));
    const path = require("path");
    app.get("*", (req,res)=>{
        res.sendFile(path.resolve(__dirname,'insta','build','index.html'));
    })
}


console.log('app started')
app.listen(PORT)