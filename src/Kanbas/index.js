import KanbasNavigation from "./KanbasNavigation";
import {BrowserRouter, Link } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import AccountNavigation from "./Account";
import Courses from "./Courses";
import CourseNavigation from "./Courses/CourseNavigation";
import { useState } from "react";
import db from "./Database";
import store from "./store";
import { Provider } from "react-redux";
import Assignments from "./Courses/Assignments";
import AssignmentEditor from "./Courses/Assignments/AssignmentEditor";
import react, { useEffect } from "react";
import Signin from "../users/signin";
import Account from "../users/account";
import Nav from "../Nav";
import UserTable from "../users/table";
import Signup from "../users/signup";
import MongoNav from "./mongoNav";


import axios from "axios";

function Kanbas() {
  // const [courses, setCourses] = useState(db.courses);
  // const courses = db.courses;
  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });

  const [courses, setCourses] = useState([]);

  const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";
  
  // || "https://kanbas-node-server-app-a6-t20f.onrender.com/api"
  const URL = `${API_BASE}/courses`
  

  const findAllCourses = async () => {
    console.log(URL);
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);


  const updateCourse = async () => {
    console.log(course._id);
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id.toString() === course._id.toString()) {
          return response.data;
        }
        return c;
      })
    );
    console.log(response);
    setCourse({ name: "" });
  };

  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    console.log(response)
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({ name: "" });
  };

  const deleteCourse = async (course) => {
    const response = await axios.delete(
      `${URL}/${course}`
    );
    console.log(response);
    setCourses(courses.filter(
      (c) => c._id !== course));
  };




   return (

    <Provider store={store}>

     <div className="d-flex">
          <KanbasNavigation/>
      
      <div>

      <div>
        <MongoNav/>
      </div>
       
       
        <Routes>
          <Route path="/" element={<KanbasNavigation />} />
          {/* <Route path="/" element={<Navigate to="Dashboard" />} /> */}
          <Route path="/Profile/*" element={<AccountNavigation/>} />
          <Route path="Dashboard" element={
            <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>
          } />

          {/* <Route path="/Courses/*" element={<Courses/>} /> */}
          
          <Route path="/Courses/:courseId/*" element={<Courses courses={courses} />} /> 
          <Route path="Courses/" element={<Navigate to="RS101/Home" />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/account" element={<Account />} />
          <Route path="/admin/users" element={<UserTable />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account/:id" element={<Account />} />

         
         
        </Routes>


      </div>
  
     </div>
     </Provider>
   );
 }
 export default Kanbas;