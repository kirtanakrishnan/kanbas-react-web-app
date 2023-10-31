import Assignment3 from "./a3";
import HelloWorld from "./a3/HelloWorld";
import Kanbas from "../Kanbas";
import {Link} from "react-router-dom";
import Nav from "../Nav";
import Assignment4 from "./a4";
import {Routes, Route, Navigate}
  from "react-router";
  import store from "./store";
import { Provider } from "react-redux";


function Labs() {
 return (
   <div>
      <Provider store={store}>
      <div className="container">
      <Nav/>
     <Routes>
       <Route path="/"
        element={<Navigate
                  to="a3"/>}/>
       <Route path="a3"
        element={<Assignment3/>}/>
       <Route path="a4"
        element={<Assignment4/>}/>
     </Routes>
      </div>
    </Provider>

     
   </div>
 );
}

export default Labs;