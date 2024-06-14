
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  const text = "Hover over me";
  const text1="Hover over me to see another Tooltip"
  
  return (
    <div>
       <Tooltip text={text}>
         <button>Hover over me</button>
       </Tooltip>
       <Tooltip text={text1}>
         <button>Hover over me to see another Tooltip</button>
       </Tooltip>
    </div>
  )
}

export default App;