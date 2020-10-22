import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Landing, Registration } from "./pages/index";
import "./index.css";
import { StateProvider } from "./state/index";
import { reducer } from "./reducer/index";
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
      <StateProvider reducer={reducer}>
        <App />
      </StateProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
