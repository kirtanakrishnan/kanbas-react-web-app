import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./home.css";
import { faCircleCheck, faPlus, faEllipsisVertical, faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules.filter((module) => module.course === courseId);

  return (
    <ul className="list-group list-group-home">
      {modules.map((module, index) => (
        <li key={index} className="list-group-item list-group-item-secondary" aria-current="true">
          <div className="d-flex justify-content-between align-items-center">
            <div>
            <FontAwesomeIcon icon={faGripVertical} className="fa-grip-vertical" style={{ color: "#5a5d63" }} />
             
              <span>{module.name}</span> <br />
              <span>{module.description}</span>
            </div>
            <div>
            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#067a23" }}className = "fa-circle-check" />
              <FontAwesomeIcon icon={faPlus} style={{ color: "#2c313a" }}className = "fa-plus" />
              <FontAwesomeIcon icon={faEllipsisVertical} className = "fa-ellipsis-vertical" style={{ color: "#989aa0" }} />
             
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ModuleList;