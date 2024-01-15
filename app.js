import React from "react";
import ReactDOM from "react-dom/client";
import './app.css';
import Planner from "./components/To-do";

const App=()=>{
    return(
       <Planner/>
    )

}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);