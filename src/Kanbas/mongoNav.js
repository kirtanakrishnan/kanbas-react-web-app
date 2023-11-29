import { Link } from "react-router-dom";
import "./mongoNav.css";

function MongoNav() {
 return (
   <nav className="nav nav-tabs mb-2 mongo-nav">
     <Link className="nav-link" to="/kanbas/signin">
       SignIn</Link>
     <Link className="nav-link" to="/kanbas/signup">
       Signup</Link>
       <Link className="nav-link" to="/kanbas/account">
       Account</Link>
     <Link className="nav-link" to="/kanbas/admin/users">
       Admin Users</Link>
   </nav>
 );
}


export default MongoNav;