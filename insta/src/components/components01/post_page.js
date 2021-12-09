import React from 'react'
import './component_style/post_page.css';

function post_page() {
    return (
        <div >
            <div className="posttop">
                <h2 className="reddit">Reddit</h2>
                <form className="searchpost">
               <input type="text" placeholder="Search"></input>
           </form>
           <div className="postbutton">
           <div className="login_post">
               
               <button type="Submit">Login</button>
               </div>
               <div className="Signup_post">
               
               <button type="Submit">Signup</button>
               </div>
               </div>
            </div>

            <div className="postbody">
                <div className="post_top">
                    <h3></h3>

                </div>
                <div className="post_text">
                   <p className="post_p">
                       I love my countryy
                       jai hind
                      
                   </p>
                </div>
                
            </div>
            
        </div>
    )
}

export default post_page
