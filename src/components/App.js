import React from "react";
import "./../styles/App.css";
import Tooltip from "./Tooltip";

const App = () => {
  const text = "Hover over me";
  const text1 = "Hover over me to see another Tooltip";

  return (
    <div>
      <div>
        <Tooltip text={text}>
          <h2 className="tooltip">
            <p>This is a tooltip</p>
          </h2>
        </Tooltip>
      </div>
      <div>
        <Tooltip text={text1}>
          <h2 className="tooltip">
            <p className="tooltip">Hover over me to see another Tooltip</p>
          </h2>
        </Tooltip>
      </div>
    </div>
  );
};

export default App;
