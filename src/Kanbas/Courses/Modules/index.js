import ModuleList from "./ModuleList";
import { faEllipsisVertical, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Modules() {
  return (
    <div>
      <div className="d-flex float-end align-items-center head-module">
        <button className="btn course">Collapse All</button>
        <button className="btn course">View Progress</button>
        <select className="form-select home-select" aria-label="Default select example">
          <option selected>Publish All</option>
          <option value="1">Value 2</option>
          <option value="2">Value 3</option>
        </select>
        <button className="btn module">
        <FontAwesomeIcon icon={faPlus} style={{ color: "white" }} />
          Module</button>
        <button className="btn ellipse">
        <FontAwesomeIcon icon={faEllipsisVertical} className="fa-ellipses-vertical" style={{ color: "#989aa0" }} />
        </button>
      </div>
      <hr className="head-line-module"></hr>
      <ModuleList />
    </div>
  );
}
export default Modules;