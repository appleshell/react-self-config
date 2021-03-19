import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function App() {
  const pare = document.getElementById("parent");
  const child = document.getElementById("btn");
  const ref1 = useRef()
  const ref2 = useRef()
  useEffect(() => {
    ref1.current.addEventListener("click", () => {
      console.log("pare out");
    });
    ref2.current.addEventListener("click", () => {
      console.log("child out");
    });
  });

  return (
    <div className="app">
      <p>hello Reactsssdssdfsdfsddf</p>
      <Link to="/list">tsdfsdfsfdo</Link>
      <Link to="/testCom">testcom</Link>
      <div ref={ref1} id="parent" onClick={() => console.log("pare inline")}>
        <button ref={ref2} id="btn" onClick={() => console.log("child inline")}>
          click
        </button>
      </div>
    </div>
  );
}

export default App;
