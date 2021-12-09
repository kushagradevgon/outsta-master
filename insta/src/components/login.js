import "./login.css";
import React , {useState} from 'react';
import {Link} from "react-router-dom";
// import  {useHistory} from "react-router-dom";
import instaText from "./images/insta_text.png";


function Login() {
    
    
    const [user, setUser] = useState({
         username: "", password: ""  
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
        const {username, password }= user;
        const res = await fetch("/login" , {
            method: "POST",
            headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            username, password
        })
    });
    const data = await res.json();
    if( data.message ===  'User LOGGED In' ){
        window.alert(data.message);
        window.location="/about";
        // <Link to="/about">/Link>
        
        }
    else{
        window.alert("User Not Found Try to Signup");
            console.log(data.message);
        }
    }




    return (<>
       <div className="signup_form">
            {/* <h1 className="logo">Instagram</h1> */}
            <img className="logo" src={instaText} />
            <h3 className="txth">Sign up to see photos and videos from your friends.</h3>
            <form method="POST" className="sigm">
                <input type ="text" name="username" value={user.username} onChange={handleInputs} placeholder="Username"/>
                <input type ="password" name="password" value={user.password} onChange={handleInputs} placeholder="Password"/>   
                <button type="Submit" onClick={PostData}>Login</button>             
            </form>
            <h3 className="txth">By logging in, you agree to our <b/>Terms , <b/>Data Policy and <b/>Cookies Policy .</h3>
                

        </div>
        <div className="signup_for">
       <h5>  Don't have an account? 
           <Link to="/signup">
           Sign up</Link></h5>
               
        </div>
    </>
    )
}

export default Login;