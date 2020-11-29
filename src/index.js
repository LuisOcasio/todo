import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Landing } from "./pages/index";
import "semantic-ui-css/semantic.min.css";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
