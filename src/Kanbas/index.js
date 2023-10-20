import KanbasNavigation from "./KanbasNavigation";
import {BrowserRouter, Link} from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import AccountNavigation from "./Account";
import Courses from "./Courses";
import CourseNavigation from "./Courses/CourseNavigation";


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
          {/* <Route path="/Courses/*" element={<Courses/>} /> */}
          <Route path="/Courses/:courseId/*" element={<Courses/>} /> 
          <Route path="Courses/" element={<Navigate to="RS101/Home" />} />
         
        </Routes>

       
      


      </div>

        
        
        
     </div>
   );
 }
 export default Kanbas;