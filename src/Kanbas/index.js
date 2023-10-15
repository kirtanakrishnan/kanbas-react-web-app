import KanbasNavigation from "./KanbasNavigation";
import {BrowserRouter, Link} from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import AccountNavigation from "./Account";
import Profile from "./Account/profile";

import Nav from "../Nav";
function Kanbas() {
   return (
     <div className="d-flex">
      
    
          <KanbasNavigation/>
          
      
      <div>
       
        <Routes>
          <Route path="/" element={<KanbasNavigation />} />
          {/* <Route path="/" element={<Navigate to="Dashboard" />} /> */}
          <Route path="/Account/*" element={<AccountNavigation/>} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Courses/*" element={<h1>Courses</h1>} />
          <Route path="/Profile" component={<Profile/>} />
        </Routes>

       
      


      </div>

        
        
        
     </div>
   );
 }
 export default Kanbas;