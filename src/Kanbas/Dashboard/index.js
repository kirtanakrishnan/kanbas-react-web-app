import React from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import './dashboard.css';

function getSemester(startDate) {
  const date = new Date(startDate);
  const month = date.getMonth();

  if (month >= 0 && month < 6) {
    return "Spring Semester Full Term";
  } else {
    return "Fall Semester Full Term";
  }
}

function Dashboard() {
  const courses = db.courses;
  return (
    <div className="container-fluid">
      <div className="row row-title">
        <div className="col-12">
          Dashboard
          <hr className="dashboard" />
          <p className="published">Published Courses (7)</p>
          <hr className="published-line" />
        </div>
      </div>
      <div className="row row-dashboard flex-row flex-wrap d-flex">
        {courses.map((course) => (
          <div key={course._id} className="col-12 col-md-6 col-xl-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src="/images/blue.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{course._id}{course.name}</h5>
                <p className="card-text">{getSemester(course.startDate)}</p>
                <i className="fa-solid fa-file-circle-check" style={{ color: "#7b808a" }}></i>
                <Link to={`/Kanbas/Courses/${course._id}`} className="btn btn-primary go-to-home">
                  Go to course
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;



