// import React from 'react'
import Navbar from './Navbar'
import React , {useEffect, useState} from 'react'
import './component_style/editProfile.css'
import { NavLink } from 'react-router-dom'

function EditProfile() {




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


// //////////////////////////////////////////////////////////////////////////

    const [edituser, setEditUser] = useState({
        mail : user.mail,  fullname: user.fullname, username: user.username,  gender:user.gender,bio: user.bio, id: user.id
    });
    let name,value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
      value = e.target.value;
        setEditUser({...edituser,[name]:value});
    };
    const PostData = async (e) => {
        e.preventDefault();
    
        const { mail, fullname, username, gender, bio}= edituser;
        const res = await fetch("/updateinfo" , {
            method: "POST",
            headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            mail, fullname, username, gender,bio,id:user._id
        })
    });
    const data = await res.json();
    if( data.message === "data updated" ){
        window.alert("Data Updated");
        window.location = "/about";
        }
    else{
        window.alert(data.message);
        }
    }

    const delet = async (e) => {
        const res = await fetch("/delete" , {
            method: "POST",
            headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            id:user._id
        })
    });
    const data = await res.json();
    if( data.message === "data updated" ){
        window.alert("Account Deleted");
        window.location = "/login";
        }
    else{
        window.alert(data.message);
        }
        
    }




    return (
        <div className="edit">
            <Navbar />
            <div className="editprofile">
                <div className="top">
                    <img src="https://c4.wallpaperflare.com/wallpaper/349/999/616/anime-black-clover-asta-black-clover-wallpaper-preview.jpg" />
                    <div className="image">    <p> {user.username}</p>

                        <NavLink className="changephoto" to="/imageuploader" >Change profile photo</NavLink></div>
                </div>
                <form method="POST">
                <div className="text_edit">
                    <div className="name">Name</div>
                    <div>
                        {/* <form action=""> */}
                            <input className="inputext" type="text" name="fullname" defaultValue={user.fullname} onChange={handleInputs} />
                        {/* </form> */}
                    </div>
                </div>


                <div className="text_edit">
                    <div className="name username">Username</div>
                    <div>
                        {/* <form action=""> */}
                            <input className="inputext" type="text" name="username" defaultValue={user.username} onChange={handleInputs} />
                        {/* </form> */}
                    </div>
                </div>



                <div className="text_edit">
                    <div className="name email">E-mail</div>
                    <div>
                        {/* <form action=""> */}
                            <input className="inputext" type="text" name="mail" defaultValue={user.mail} onChange={handleInputs} />
                        {/* </form> */}
                    </div>
                </div>
                <div className="text_edit">
                    <div className="name gender">Gender</div>
                    <div>
                        {/* <form action=""> */}
                            <select className="genderdropdown" name="gender" defaultValue={user.gender} onChange={handleInputs}>
                            <option value="none"  selected disabled hidden>{user.gender}</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                                <option value="Prefer not to say">Prefer not to say</option>
                            </select>
                        {/* </form> */}
                    </div>
                </div>
                <div className="text_edit">
                    <div className="name bio">Bio</div>
                    <div>
                        {/* <form action=""> */}
                            <textarea className="inputext" type="text" name="bio" defaultValue={user.bio} onChange={handleInputs} />
                        {/* </form> */}
                    </div>
                </div>
                
                <button type="Submit" onClick={PostData} >Submit</button>
                </form>
                <form >
                    
                <button type="Submit" onClick={delet} id="accdlt" >Delete my Account</button>
                </form>
            </div>
        </div>


    )
}

export default EditProfile
