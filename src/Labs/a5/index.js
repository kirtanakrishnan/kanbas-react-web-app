import WorkingWithObjects from "./WorkingWithObjects";
import EncodingParametersInURLs from "./EncodingParametersInURLS";
import WorkingWithArrays from "./WorkingWithArrays";

function Assignment5() {
  const API = "https://kanbas-node-server-app-a1dt.onrender.com/"
    return (
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href="https://kanbas-node-server-app-a1dt.onrender.com/a5/welcome"
             className="list-group-item">
            Welcome
          </a>
        </div>
        <h1>SimpleAPIExamples</h1>
        <EncodingParametersInURLs/>
        <WorkingWithObjects/>
        <WorkingWithArrays/>
       
      </div>
    );
  }
  export default Assignment5;