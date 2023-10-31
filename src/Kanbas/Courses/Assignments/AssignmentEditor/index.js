import {React, useState} from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "./index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { setAssignment, updateAssignment } from "../assignmentsReducer";
import { useSelector, useDispatch } from "react-redux";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  let assignment = useSelector((state) => state.assignmentsReducer.assignment);

  assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);
  
  let aID = assignment._id;
  // let aTitle = assignment.title;
  let aCourse = assignment.course;
  let aWeek = assignment.week;
  // let aDescription = assignment.description;
  // let aDueDate = assignment.dueDate;
  let aAvailableFromDate = assignment.availableFromDate;
  let aAvailableUntilDate = assignment.availableUntilDate;
  let aPoints = assignment.points;
 

  const[title, setTitle] = useState(assignment.title);
  const[description, setDescription] = useState(assignment.description);
  const[dueDate, setDueDate] = useState(assignment.dueDate);
  // console.log(assignment);

  

    // const [editedAssignment] = useState({ ...assignment });

  
  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   dispatch(setAssignment({ ...editedAssignment, [name]: value }));
  // };


  const { courseId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  }

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  }

  const dueDateChangeHandler = (event) => {
    setDueDate(event.target.value);
  }
 
  const handleSave = () => {
    const editedAssignment = {
      '_id':aID, title, 'course':aCourse, 'week':aWeek, description, dueDate, aAvailableFromDate, aAvailableUntilDate, 'points':aPoints
    }
    console.log(editedAssignment);
    dispatch(updateAssignment(editedAssignment));
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
      <input onChange={titleChangeHandler} value={title}
             className="form-control mb-2 edit-assignment" />
      
      <text className="assignment-description">Assignment Name</text>
      <input onChange={descriptionChangeHandler} value={description}
             className="form-control mb-2 assignment-description" />
      
      <div class="align-items-center input-points">
        <div class="col-auto">
          <label for="inputPassword6" class="col-form-label">Points</label>
          </div>
          <div class="col-auto">
            <input max = "100" type="number" id="inputPassword6" value={aPoints} class="form-control" aria-describedby="passwordHelpInline"/>
          </div> 
      </div>

      <div class="align-items-center assign-to">
               
                <div class="col-auto">
                  <label for="inputPassword6" class="col-form-label">Assign to</label>
                </div>
                <div class="col-auto">
                  <input placeholder="assignment" type="text" id="inputPassword6" value="Everyone" class="form-control assign-input" aria-describedby="passwordHelpInline"/>
                </div>
                
              </div>

              <div class=" align-items-center due">
                <div class="col-auto">
                  <label for="inputPassword6" class="col-form-label">Due</label>
                </div>
                <div class="col-auto">
                  <input placeholder="assignment" type="date" id="inputPassword6" onChange={dueDateChangeHandler} value={dueDate} class="form-control due-input" aria-describedby="passwordHelpInline"/>
                </div>
                
              </div>

              <div class=" align-items-center available-from">
                <div class="col-auto">
                  <label for="inputPassword6" class="col-form-label">Available from</label>
                </div>
                <div class="col-auto">
                  <input placeholder="assignment" type="date" id="inputPassword6" class="form-control available-input" aria-describedby="passwordHelpInline"/>
                </div>
                
              </div>

              <div class=" align-items-center until">
                <div class="col-auto">
                  <label for="inputPassword6" class="col-form-label">Until</label>
                </div>
                <div class="col-auto">
                  <input placeholder="assignment" type="date" id="inputPassword6" onChange={dueDateChangeHandler} value={dueDate} class="form-control until-input" aria-describedby="passwordHelpInline"/>
                </div>
                
              </div>

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