import React, {useState} from 'react';
import './signup.css';
import {Link} from "react-router-dom";
import instaText from "./images/insta_text.png";

const ITEM_URL = "https://localhost:3000/router/:id"

function Signup() {
    const [user, setUser] = useState({
        mail : "", fullname: "", username: "", password: ""  
    });
    let name,value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
      value = e.target.value;
        setUser({...user,[name]:value});
    };
    const PostData = async (e) => {
        e.preventDefault();
        const { mail, fullname, username, password }= user;
        const res = await fetch("/signup" , {
            method: "POST",
            headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            mail, fullname, username, password
        })
    });
    const data = await res.json();
    if( data.message === 'User Created & A verification email has been sent' ){
        window.alert("Registration Successfull");
        }
    else{
        window.alert(data.message);
        }
    }
        
        
    return (<>
       <div className="signup_form">
            {/* <h1 className="logo">Instagram</h1> */}
            <img className="logo" src={instaText} />
            <h3 className="txth">Sign up to see photos and videos from your friends.</h3>
            <form method="POST" className="sigm">
                <input  type="email" name ="mail" value={user.mail} onChange={handleInputs} placeholder="Email Address"  />
                <input  type="text" name="fullname" value={user.fullname} onChange={handleInputs} placeholder="Full Name" />
                <input  type ="text" name="username" value={user.username} onChange={handleInputs} placeholder="Username" />
                <input  type ="password" name="password" value={user.password} onChange={handleInputs} placeholder="Password" />   
                <button onClick={PostData}type="Submit">Sign up</button>             
            </form>
            <h3 className="txth">By signing up, you agree to our <b/>Terms , <b/>Data Policy and <b/>Cookies Policy .</h3>
                

        </div>
        <div className="signup_for">
       <h5>  Have an account?  
           <Link to="/login">
           Login </Link></h5>    
        </div>
    </>
    )
}

export default Signup
