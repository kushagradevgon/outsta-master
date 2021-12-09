import React , {useEffect, useState} from 'react'
// import data from"./about.js"
import "./component_style/description.css"
import { NavLink } from 'react-router-dom';
import {ReactComponent as Settings} from "./images/settings.svg";
var post = 998;

var username = "naughty"; 
var follower = "2.3M";
var following=0; 
var FullName ="Naughty Nation";
var category = "comedy";
var desc =`Mata Rani ki kasam hai aaye ho to follow kr k Jana 😂😜
Dm For credits/Removal
Dm me if u don't like what u see
#opentofeedback`;
function Description() {
    const [user,setUser]= useState({});
    const callAboutPage= async()=>{
        try{
          const res = await fetch('/aboutbackend', {
            method:"GET",
            headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
            },
            credentials:"include"
          });
    
          
          const data = await res.json();
          console.log(data);
          setUser(data);
        if(res.message === "Unauthorized: No token provided"){   
           const error = new Error(res.message);
           throw error;
        }
      } catch (err){
        console.log(err);
        window.location = "/login";
        // history.push('/login');
      }
          // if( data.message === 'User Created & A verification email has been sent' ){
          //     window.alert("Registration Successfull");
          //     }
          // else{
          //     window.alert(data.message);
          //     }
          // }
      
        // catch(err){
        //   console.log(err);
        // }
      } 
      
      useEffect(() => {
        callAboutPage();
      }, []);
    return (<div>
        
        <div className="userProfile">
            <p>{user.username}</p>
            <NavLink to="/editProfile">
            <button>Edit Profile</button></NavLink>
            <Settings className="settingIcon"/>
        </div>
        <div className="follower">
            <p className="followertext"><strong>{post}</strong> <p className="text">post</p></p>
            <p className="followertext">{follower} <p className="text">followers</p></p>
            <p className="followertext">{following} <p className="text">following</p></p>
        </div>
        <div className="profileData">
            <p className="followertext">{user.fullname}</p>
            <p className="text">{category}</p>
            <p className="followertext PRO">{user.bio}</p>
        </div>
        </div>
    )
}

export default Description
