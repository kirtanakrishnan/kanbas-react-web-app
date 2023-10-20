import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "./index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faCircleCheck } from "@fortawesome/free-solid-svg-icons";


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <div className="published-a">
      <FontAwesomeIcon icon={faCircleCheck} className="check-a"style={{ color: "#067a23" }} />
      <text className="text-p-a">Published</text>
      <button type="button" className="btn ellipse-assignment-a">
              <FontAwesomeIcon icon={faEllipsisVertical} style={{ color: "#989aa0" }} />
            </button>
      </div>
      
      <hr className="a-line"></hr>
      <text className="assignment-name">Assignment Name</text>
      <input value={assignment.title}
             className="form-control mb-2 edit-assignment" />
      <hr className="a-line"></hr>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger">
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-success me-2">
        Save
      </button>
      <hr className="a-line"></hr>
    </div>
  );
}


export default AssignmentEditor;