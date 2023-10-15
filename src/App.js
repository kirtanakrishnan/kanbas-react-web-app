import logo from './logo.svg';
import './App.css';
import { HashRouter, Routes, Route, Link } from "react-router-dom";

import Labs from "./Labs";
import Kanbas from './Kanbas';
import HelloWorld from './Labs/a3/HelloWorld';
import {Navigate} from "react-router";
import MainNavigation from './MainNavigation';

function App() {
   return (

      <HashRouter>
<div>
        
        <Routes>
          
          <Route path="/*" element={<MainNavigation/>} />
          <Route path="Labs/*" element={<Labs />} />
           <Route path="kanbas/*" element={<Kanbas />} />
          <Route path="hello" element={<HelloWorld />} /> 
        </Routes>
      </div>
      </HashRouter>
      
    
   );
}

export default App;
