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
        

        <input className="input-module"
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }/>
        
          <button className="add-module" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
        <button className="update-module" onClick={() => dispatch(updateModule(module))}>
                Update
        </button>
        <div>
        <textarea className="text-module"
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }/>
        </div>
        
      </li>

      {modules.map((module, index) => (
        <li key={index} className="list-group-item list-group-item-secondary" aria-current="true">
          

          <div className="d-flex justify-content-between align-items-center">
            <div>
            <FontAwesomeIcon icon={faGripVertical} className="fa-grip-vertical" style={{ color: "#5a5d63" }} />
             
              <span>{module.name}</span> <br />
              <span>{module.description}</span>
            </div>
            <div>
            <button className="edit-module"
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>

          <button className="delete-module"
             onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>
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