
import React from "react";
import ModuleList from "../Modules/ModuleList";
import "./index.css";
import { faEllipsisVertical, faGlasses } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Status from "./status";


function Home() {
  return (

    
    
      <div className="col-md-2 col-sm-0 col-lg-5 col-xl-5 col-xxl-5 d-block d-md-block main-home flex-column">

      
      

      <button className="btn student">
        <FontAwesomeIcon icon={faGlasses} className="fa-glasses" style={{ color: "#3e4147" }} />
        Student View
      </button>
      <Status/>

      <div className="d-flex float-end align-items-center head">
        <button className="btn course">Collapse All</button>
        <button className="btn course">View Progress</button>
        <select className="form-select home-select" aria-label="Default select example">
          <option selected>Publish All</option>
          <option value="1">Value 2</option>
          <option value="2">Value 3</option>
        </select>
        <button className="btn module">Module</button>
        <button className="btn ellipse">
        <FontAwesomeIcon icon={faEllipsisVertical} className="fa-ellipses-vertical" style={{ color: "#989aa0" }} />
        </button>
      </div>

      <hr className="head-line"></hr>

      
      <ModuleList />
    </div>


   
    
  );
}

export default Home;