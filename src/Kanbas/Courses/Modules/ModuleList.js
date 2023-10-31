import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./home.css";
import { faCircleCheck, faPlus, faEllipsisVertical, faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();



  // const modules = db.modules.filter((module) => module.course === courseId);

  return (
    <ul className="list-group list-group-home">
      <li className="list-group-home list-group-item">
        <button  onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
        <button onClick={() => dispatch(updateModule(module))}>
                Update
        </button>

        <input
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }/>
        <textarea
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }/>
      </li>

      {modules.map((module, index) => (
        <li key={index} className="list-group-item list-group-item-secondary" aria-current="true">
          <button
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>

          <button
             onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>

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