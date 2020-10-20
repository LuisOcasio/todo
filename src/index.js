import React from "react";
import ReactDOM from "react-dom";
import Todo from "./components/Todo";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <Todo />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
