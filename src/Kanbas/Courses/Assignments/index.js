import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import CourseNavigation from "../CourseNavigation";
import "./assignments.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlasses, faPlus, faEllipsisVertical, faFile, faGripVertical, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  return (
    <div className="container-fluid">
      <CourseNavigation />
      <div className="row">
        <div className="col-md-2 col-lg-2 col-sm-0 col-xl-5 col-xxl-5 main-home flex-column">
          {/* <button type="button" className="btn student-assignment">
            <FontAwesomeIcon icon={faGlasses} style={{ color: "#3e4147" }} />
            Student View
          </button> */}
          <p></p>
          <div className="d-flex float-start align-items-center search">
            <textarea
              className="form-control assignment"
              placeholder="Search for Assignment"
              id="floatingTextarea"
            ></textarea>
            <label htmlFor="floatingTextarea"></label>
          </div>
          <div className="d-flex float-end align-items-center head-assignment">
            <button type="button" className="btn group-assignment">
              <FontAwesomeIcon icon={faPlus} style={{ color: "#484d56" }} />
              Group
            </button>
            <button type="button" className="btn module-assignment">
              <FontAwesomeIcon icon={faPlus} style={{ color: "white" }} />
              Assignment
            </button>
            <button type="button" className="btn ellipse-assignment">
              <FontAwesomeIcon icon={faEllipsisVertical} style={{ color: "#989aa0" }} />
            </button>
          </div>
          <hr className="head-line-assignment"></hr>
          <ul className="list-group list-group-assignment">
            <li className="list-group-item list-group-item-secondary" aria-current="true">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <FontAwesomeIcon icon={faGripVertical} style={{ color: "#5a5d63" }} />
                  <span> Assignments</span>
                </div>
                <div className="head-container">
                  <input
                    type="email"
                    className="form-control total-assignment"
                    id="floatingInputDisabled"
                    placeholder="40% of total"
                    disabled
                  ></input>
                  <FontAwesomeIcon icon={faPlus} className="plus-assignment"style={{ color: "#2c313a" }} />
                  <FontAwesomeIcon icon={faEllipsisVertical} className="plus-assignment"style={{ color: "#989aa0" }} />
                </div>
              </div>
            </li>
            {courseAssignments.map((assignment) => (
              <li className="list-group-item sub-item-a" key={assignment._id}>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <FontAwesomeIcon icon={faGripVertical} style={{ color: "#5a5d63" }} />
                    <FontAwesomeIcon icon={faFile} style={{ color: "#186825" }} />
                    <span>
                      <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                        {assignment.title}
                      </Link>
                    </span>
                    <br />
                    <span className="sub-text">{assignment.week}</span>
                    <br />
                    <span className="sub-text">
                      <text className="multiple">Multiple Modules | </text>
                      {`Due ${assignment.dueDate} | ${assignment.points} pts`}</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faCircleCheck} className="check-a"style={{ color: "#067a23" }} />
                    <FontAwesomeIcon icon={faEllipsisVertical} style={{ color: "#989aa0" }} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Assignments;




