import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Landing, Registration } from "./pages/index";
import "./index.css";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={Landing} />
      <Route path="/register" component={Registration} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
