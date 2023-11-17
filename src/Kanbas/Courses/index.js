import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { useState, useEffect } from "react";
import axios from "axios";


function Courses() {
  const { courseId } = useParams();

  const [course, setCourse] = useState({});
  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/courses`

  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    console.log(URL);
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  
  return (
    <div>
      
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="RS101/Home" />} />
            {/* <Route path="Home" element={<Home/>} /> */}
            <Route path="/RS101/Home" element={<Home/>} />
            <Route path="Home" element={<Home/>}/>
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/" element={<Assignments/>} />
            <Route
              path="/Assignments/:assignmentId/*"
              element={<AssignmentEditor/>}
            />
            <Route
              path="/Kanbas/Courses/:courseId/Assignments/New"
              element={<AssignmentEditor />}
            />
           
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;