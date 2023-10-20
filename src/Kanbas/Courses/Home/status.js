import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faCircleCheck, faFile, faRightToBracket, faCompass, faChartSimple, faBullhorn, faBell } from "@fortawesome/free-solid-svg-icons";
import "./status.css";


function Status() {
    return (
        <div className="col-md-2 col-sm-0 col-lg-5 col-xl-5 col-xxl-5 d-none d-lg-block side">
<div className="status">
  Course Status
</div>
<div className="col col-button">
  <button type="button" className="btn unpublish">
    <FontAwesomeIcon icon={faBan}className="fa-ban icon" style={{ color: "#808793" }} />
    Unpublish
  </button>
  <button type="button" className="btn published-btn">
    <FontAwesomeIcon icon={faCircleCheck} className="fa-ban icon"style={{ color: "#ffffff" }} />
    Published
  </button>
</div>
<div className="button-group">
  <button type="button" className="btn unpublish">
    <FontAwesomeIcon icon={faFile} className="icon"style={{ color: "#7d838c" }} />
    <a href="#">Import Existing Content</a>
  </button>
  <button type="button" className="btn unpublish">
    <FontAwesomeIcon icon={faRightToBracket}className="icon" style={{ color: "#7d838c" }} />
    <a href="#">Import from Commons</a>
  </button>
  <button type="button" className="btn unpublish">
    <FontAwesomeIcon icon={faCompass}className="icon"  style={{ color: "#848890" }} />
    <a href="#">Choose Home Page</a>
  </button>
  <button type="button" className="btn unpublish">
    <FontAwesomeIcon icon={faChartSimple}className="icon"  style={{ color: "#737882" }} />
    <a href="#">View Course Stream</a>
  </button>
  <button type="button" className="btn unpublish">
    <FontAwesomeIcon icon={faBullhorn} className="icon" style={{ color: "#79808b" }} />
    <a href="#">New Announcement</a>
  </button>
  <button type="button" className="btn unpublish">
    <FontAwesomeIcon icon={faChartSimple} className="icon" style={{ color: "#737882" }} />
    <a href="#">New Analytics</a>
  </button>
  <button type="button" className="btn unpublish">
    <FontAwesomeIcon icon={faBell} className="icon" style={{ color: "#6f7276" }} />
    <a href="#">View Course Notifications</a>
  </button>
</div>
<div className="todo">
  To Do
  <hr className="todo-line" />
  <p className="todo-sub">Grade A1 - ENV + HTML</p>
</div>
<div className="coming-up">
  Coming Up
  <hr className="todo-line" />
  <div className="tasks">
    <a href="#">Lecture CS 4550.12631.202410 Sep 7 at 11:45am</a>
  </div>
  <div className="tasks">
    <a href="#">Lecture CS 4550.12631.202410 Sep 11 at 11:45am</a>
  </div>
  <div className="tasks">
    <a href="#">CS 5610 06 SP23 Lecture Sep 11 at 6pm</a>
  </div>
</div>
</div>

    );

 }

export default Status
