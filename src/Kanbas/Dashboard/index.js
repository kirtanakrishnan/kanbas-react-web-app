import { React, useState } from "react";
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

function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
  ) {  
  
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
      <h5>Course</h5>
      <input value={course.name} className="form-control new-course"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control new-course"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control new-course" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control new-course" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />


<div>
<button onClick={addNewCourse} className="add-course">
        Add
      </button>
      <button onClick={updateCourse} className="update-course">
        Update
      </button>
</div>
      

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
                <button className="edit-course"
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>

                <button className="delete-course"
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}>
              Delete
            </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;



