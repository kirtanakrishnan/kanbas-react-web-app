import KanbasNavigation from "./KanbasNavigation";
import {BrowserRouter, Link} from "react-router-dom";
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

import Nav from "../Nav";

import axios from "axios";

function Kanbas() {
  // const [courses, setCourses] = useState(db.courses);
  // const courses = db.courses;
  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });

  const [courses, setCourses] = useState([]);
  const URL = "http://localhost:4000/api/courses";
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);


  const updateCourse = async (course) => {
    console.log(course._id);
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return response.data;
        }
        return c;
      })
    );
    console.log(response);
    setCourse({ name: courses.name });
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
       
       
        <Routes>
          <Route path="/" element={<KanbasNavigation />} />
          {/* <Route path="/" element={<Navigate to="Dashboard" />} /> */}
          <Route path="/Account/*" element={<AccountNavigation/>} />
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
         
         
        </Routes>


      </div>
  
     </div>
     </Provider>
   );
 }
 export default Kanbas;