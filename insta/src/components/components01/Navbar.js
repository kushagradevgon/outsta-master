import "./component_style/navbar.css"
import Menu from "./Menu"
import instaText from "./images/insta_text.png"
import { useCookies } from "react-cookie";
import cookies from "js-cookie";


function Navbar(){
    // const [cookies,removeCookie] = useCookies({})
    const logout = ()=>{
        // removeCookie("jwt");
        cookies.remove("jwt");
        window.location= "/login";
    }

    return(
        <div className="navbar">
           <div className="written_logo">
               <img src={instaText} alt="image" />
           </div>
           <div className="searchLogo">
           
           <form className="search">
               <input type="text" placeholder="Search"></input>
           </form>
           </div>
           <div className="menu">
               <Menu/>
               
           </div>
           <div className="logout_btn">
               
           <button type="Submit" onClick={logout}  >Logout</button>
           </div>
        </div>
    );
}
export default Navbar;