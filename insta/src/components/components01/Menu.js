import "./component_style/menu.css";
import { ReactComponent as Home } from "./images/home.svg";
import { ReactComponent as Inbox } from "./images/inbox.svg";
import { ReactComponent as Create } from "./images/create.svg";
import { ReactComponent as Explore } from "./images/explore.svg";
import { ReactComponent as Notifications } from "./images/notification.svg";

function Menu() {
    return (
      <div className="menu">
        <Home className="icon" />
        <Inbox className="icon" />
        <Create className="icon" />
        <Explore className="icon" />
        <Notifications className="icon" />
      </div>
    );
  }
  
  export default Menu;