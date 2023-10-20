import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import './kanbasNavigation.css';
import KanbasNavigation from "../../KanbasNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopoto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const location = useLocation();
  const isModulesPage = location.pathname.includes("Modules");
  const isAssignmentsPage = location.pathname.includes("Assignments");


  return (
    
    <div className="col-md-2 col-md-2 col-sm-0 col-lg-5 col-xl-5 col-xxl-5 sidebar">
     <KanbasNavigation/>

     <div className="col-md-2 sidebar-course">

     <nav aria-label="breadcrumb" className="custom-breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            <p className="class">
              <FontAwesomeIcon icon={faBars} className="fa-xl bars" style={{ color: "#d12323" }} />
              {isModulesPage
                ? "CS4550.01.02 > Modules"
                : isAssignmentsPage
                ? "CS4550.01.02 > Assignments"
                : "CS4550.01.02 > Home"}
              
            </p>
          </li>
        </ol>
      </nav>

     <div className="list-group list-group-flush list-group-course">
      {links.map((link, index) => (
        <li
          key={index}
          className={`list-group-item list-group-item-action ${pathname.includes(link) && "active"}`}
        >
          <Link to={`/Kanbas/Courses/${courseId}/${link}`}>{link}</Link>
          <div>
            <i className="fa-regular fa-eye-slash" style={{ color: "#1a1d23" }}></i>
          </div>
        </li>
      ))}
    </div>

     </div>
      
    </div>
    
  );
}

export default CourseNavigation;

