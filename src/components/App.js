
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  const text = "Hover over me";
  const text1="Hover over me to see another Tooltip"
  
  return (
    <div>
       <Tooltip text={text}>
         <h2 className="tooltip"><button>Hover over me</button></h2>
       </Tooltip>
       <Tooltip text={text1}>
         <p className="tooltip"><button>Hover over me to see another Tooltip</button></p>
       </Tooltip>
    </div>
  )
}

export default App; 